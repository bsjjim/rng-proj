package com.lotterental.rng.demo.config.nexacro;


import java.io.IOException;
import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.web.servlet.WebMvcRegistrations;
import org.springframework.boot.web.servlet.ServletContextInitializer;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.core.annotation.Order;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.HandlerMethodReturnValueHandler;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.multipart.support.MultipartFilter;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter;

import com.lotterental.rng.demo.common.converter.RngDataSetToListConverter;
import com.lotterental.rng.demo.common.converter.RngDataSetToObjectConverter;
import com.lotterental.rng.demo.config.WebAppConfig;
import com.lotterental.rng.core.common.exception.BusinessException;
import com.nexacro.java.xapi.tx.PlatformType;
import com.nexacro.java.xeni.services.GridExportImportServlet;
import com.nexacro.uiadapter.spring.core.context.ApplicationContextProvider;
import com.nexacro.uiadapter.spring.core.data.convert.NexacroConverter;
import com.nexacro.uiadapter.spring.core.data.convert.NexacroConverterFactory;
import com.nexacro.uiadapter.spring.core.data.support.DataSetToListConverter;
import com.nexacro.uiadapter.spring.core.data.support.DataSetToObjectConverter;
import com.nexacro.uiadapter.spring.core.resolve.NexacroMappingExceptionResolver;
import com.nexacro.uiadapter.spring.core.resolve.NexacroRequestMappingHandlerAdapter;
import com.nexacro.uiadapter.spring.core.view.NexacroFileView;
import com.nexacro.uiadapter.spring.core.view.NexacroView;
import com.nexacro.uiadapter.spring.dao.DbVendorsProvider;
import com.nexacro.uiadapter.spring.dao.Dbms;
import com.nexacro.uiadapter.spring.dao.dbms.Hsql;

@Configuration
public class NexacroConfig extends WebAppConfig implements WebMvcRegistrations {
	
	@Value("${rng.nexacro.default.error.msg}")
	private String defaultErrorMsg;
	
	@Value("${rng.nexacro.excel.url}")
	private String excelUrl;
	
	@Value("${rng.nexacro.excel.path.export}")
	private String exportPath;
	
	@Value("${rng.nexacro.excel.path.import}")
	private String importPath;
	
	@Value("${rng.nexacro.monitor.enabled}")
	private String monitorEnabled;
	
	@Value("${rng.nexacro.monitor.cycle.time}")
	private String monitorCycleTime;
	
	@Value("${rng.nexacro.file.storage.time}")
	private String fileStorageTime;
	
	@Value("${rng.nexacro.default.encoding}")
	private String defaultEncoding;
	
	@Value("${rng.nexacro.size.upload.max}")
	private long maxUploadSize;
	
	@Value("${rng.nexacro.size.in-memory.max}")
	private int maxInMemorySize;
	
	@Value("${rng.nexacro.file.system.resource}")
	private String fileSystemResource;

    /**
     * Spring의 ApplicationContext를 제공한다.
     * @return
     */
    @Bean
    @Lazy(false)
    public ApplicationContextProvider applicationContextProvider() {
        return new ApplicationContextProvider();
    }

    /**
     * 넥사크로플랫폼 RequestMappingHandlerAdapter 구현체 등록
     */
    @Override
    public RequestMappingHandlerAdapter getRequestMappingHandlerAdapter() {
        return new NexacroRequestMappingHandlerAdapter();
    }

    /**
     * 넥사크로플랫폼 ArgumentResolver 등록
     */
    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(new RngMethodArgumentResolver());
        resolvers.add(new RngMultipartFileMethodArgumentResolver());
    }

    /**
     * 넥사크로플랫폼 ReturnValueHandler 등록
     */
    @Override
    public void addReturnValueHandlers(List<HandlerMethodReturnValueHandler> handlers) {
    	RngMethodReturnValueHandler returnValueHandler = new RngMethodReturnValueHandler();
        returnValueHandler.setView(getNexacroView());
        returnValueHandler.setFileView(new NexacroFileView());
        handlers.add(returnValueHandler);
    }

    /**
     * 넥사크로플랫폼 에러 처리 ExceptionResolver 등록
     */
    @Override
    public void configureHandlerExceptionResolvers(List<HandlerExceptionResolver> resolvers) {
        NexacroMappingExceptionResolver nexacroException = new NexacroMappingExceptionResolver();
        nexacroException.setView(getNexacroView());
        nexacroException.setShouldLogStackTrace(true);
        nexacroException.setShouldSendStackTrace(true);
        nexacroException.setDefaultErrorMsg(defaultErrorMsg);
        nexacroException.setMessageSource(messageSource());
        nexacroException.setOrder(1);
        resolvers.add(nexacroException);
    }

    /**
     * Dbms별 meta정보 조회를 위한 bean 등록
     * mybatis 사용 시 데이터가 없는 경우 null 반환
     * nexacro platform 컬럼정보 생성을 위해 metadata 정보 조회 후 컬럼 생성 처리
     * @return
     */
    @Bean
    public DbVendorsProvider dbmsProvider() {
        DbVendorsProvider dbmsProvider = new DbVendorsProvider();
        Map<String, Dbms> dbvendors = new HashMap<>();
//        dbvendors.put("HSQL Database Engine", new Hsql());
        dbvendors.put("H2", new Hsql());
        dbmsProvider.setDbvendors(dbvendors);
        return dbmsProvider;
    }

    /**
     * 엑셀처리 서블릿 등록
     */
    @Bean
    public ServletRegistrationBean<GridExportImportServlet> gridExportImportServletBean() {
        ServletRegistrationBean<GridExportImportServlet> bean =
        		new ServletRegistrationBean<>( new GridExportImportServlet(), excelUrl);
        bean.setLoadOnStartup(1);
        return bean;
    }

    /**
     * Register XENI INIT-PARAMETER
     */
    @Bean
    public ServletContextInitializer initializer() {
        return new ServletContextInitializer() {
            /*
             * 넥사크로플랫폼 엑셀 처리 모듈:nexacroN-xeni.jar를 이용한 엑셀 처리 설정
             */
            @Override
            public void onStartup(ServletContext servletContext) throws ServletException {
            	servletContext.setInitParameter("export-path"       , exportPath);  		//엑셀 export 임시폴더 생성 기준 디렉터리
                servletContext.setInitParameter("import-path"       , importPath);  		//엑셀 import 임시폴더 생성 기준 디렉터리
                servletContext.setInitParameter("monitor-enabled"   , monitorEnabled);		//임시파일 삭제를 위한 모니터링 여부
                servletContext.setInitParameter("monitor-cycle-time", monitorCycleTime);    //임시파일 삭제를 위한 모니터링 주기( default:분)
                servletContext.setInitParameter("file-storage-time" , fileStorageTime);     //임시파일 생성 디렉터리 모니터링 주기 (default:분)
            }
        };
    }

    /**
     * CommonsMultipartResolver 사용
     * Multipart Resolver - Upload upto 10 Megabytes
     * This is for XENI IMPORT
     */
    @Bean
    public CommonsMultipartResolver multipartResolver() throws IOException {
        CommonsMultipartResolver resolver = new CommonsMultipartResolver();
        resolver.setDefaultEncoding(defaultEncoding);
        resolver.setMaxUploadSize(maxUploadSize);
        resolver.setMaxInMemorySize(maxInMemorySize);
        resolver.setUploadTempDir((Resource) tempFileDir());
        return resolver;
    }

    /**
     * 파일 업로드 Temp 폴더 설정
     * windows 서버의 경우 경로 설정
     */
    @Bean
    public FileSystemResource tempFileDir() {
    	FileSystemResource resource = new FileSystemResource(fileSystemResource);
        return resource;
    }

    /**
     *  MultipartFilter 재정의
     */
    @Bean
    @Order(0)
    public MultipartFilter multipartFilter() {
        MultipartFilter multipartFilter = new MultipartFilter();
        multipartFilter.setMultipartResolverBeanName("multipartResolver");
        return multipartFilter;
    }
    
    @PostConstruct
	public void initialize() {
    	new NexacroConfigInitializer().changeNxConverterToCustomConverter();
	}
	
    private class NexacroConfigInitializer {
    	private void changeNxConverterToCustomConverter() {
    		removeNexacroConverter();
    		addCustomConverter();
    	}

	  	private void removeNexacroConverter() {
	  		@SuppressWarnings("rawtypes")
			Set<NexacroConverter> converterSet = pickOutConverterSets();
	  		converterSet.removeIf(converter -> converter instanceof DataSetToObjectConverter);
	  		converterSet.removeIf(converter -> converter instanceof DataSetToListConverter);
	  	}
	
	  	@SuppressWarnings({ "rawtypes", "unchecked" })
	  	private Set<NexacroConverter> pickOutConverterSets() {
	      	Field field = null;
	  		try {
	  			field = NexacroConverterFactory.class.getDeclaredField("converterSets");
	  			field.setAccessible(true);
	  			return (Set<NexacroConverter>) field.get(NexacroConverterFactory.getInstance());
	  		} catch (Exception e) {
	  			throw new BusinessException("");
	  		} finally {
	  			field.setAccessible(false);
	  		}
	  	}
	
	  	private void addCustomConverter() {
	  		NexacroConverterFactory.register(new RngDataSetToObjectConverter());
	  		NexacroConverterFactory.register(new RngDataSetToListConverter());
	  	}
    }
    
    private NexacroView getNexacroView() {
    	NexacroView nexacroView = new NexacroView();
        nexacroView.setDefaultContentType(PlatformType.CONTENT_TYPE_XML);
        nexacroView.setDefaultCharset(PlatformType.DEFAULT_CHAR_SET);
        return nexacroView;
    }
    
}
