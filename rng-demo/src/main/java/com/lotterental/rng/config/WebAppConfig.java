package com.lotterental.rng.config;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

@Configuration
@EnableWebMvc
public class WebAppConfig implements WebMvcConfigurer {
	
	@Value("${rng.webapp.view.prefix}") 
	private String viewPrefix;
	
	@Value("${rng.webapp.view.suffix}") 
	private String viewSuffix;
	
	@Value("${rng.webapp.view.name}") 
	private String viewName;
	
	@Value("${rng.webapp.resource.location}") 
	private String resourceLocation;
	
	@Value("${rng.webapp.message.location}")
	private String messageLocation;
	
	@Value("${rng.webapp.default.encoding}")
	private String defaultEncoding;
	
	@Value("${rng.webapp.cache.seconds}")
	private int cacheSeconds;
	
	@Value("${rng.webapp.default.message}")
	private boolean useCodeAsDefaultMessage;
	
	@Value("${rng.webapp.interceptor.locale.param}") 
	private String interceptorParamName;

    /**
     * Servlet 관련
     */
    @Override
    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
        return;
    }

    /**
     * View Resolver 경로 설정
     */
    @Override
    public void configureViewResolvers(ViewResolverRegistry registry) {
        registry.jsp(viewPrefix, viewSuffix);
    }

    /**
     * 루트 "/" 접속시 index 페이지로 포워딩
     */
    @Override
    @Order(Ordered.HIGHEST_PRECEDENCE + 1)
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName(viewName);
    }

    /**
     * Web Resource 경로 설정
     */
    @Override
    @Order(Ordered.HIGHEST_PRECEDENCE + 2)
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
    	registry.addResourceHandler("/**").addResourceLocations(resourceLocation);
    }

    /**
     * 메세지 소스를 생성한다.
     */
    @Bean
    public ReloadableResourceBundleMessageSource messageSource() {
        ReloadableResourceBundleMessageSource source = new ReloadableResourceBundleMessageSource();        
        source.setBasename(messageLocation);						// 메세지 프로퍼티파일의 위치와 이름을 지정한다.        
        source.setDefaultEncoding(defaultEncoding);					// 기본 인코딩을 지정한다.        
        source.setCacheSeconds(cacheSeconds);						// 프로퍼티 파일의 변경을 감지할 시간 간격을 지정한다.        
        source.setUseCodeAsDefaultMessage(useCodeAsDefaultMessage);	// 없는 메세지일 경우 예외를 발생시키는 대신 코드를 기본 메세지로 한다.
        return source;
    }

    /**
     * 변경된 언어 정보를 기억할 로케일 리졸버를 생성한다.
     * 여기서는 세션에 저장하는 방식을 사용한다.
     * @return
     */
    @Bean
    public SessionLocaleResolver localeResolver() {
        return new SessionLocaleResolver();
    }

    /**
     * 언어 변경을 위한 인터셉터를 생성한다.
     */
    @Bean
    public LocaleChangeInterceptor localeChangeInterceptor() {
        LocaleChangeInterceptor interceptor = new LocaleChangeInterceptor();
        interceptor.setParamName(interceptorParamName);
        return interceptor;
    }

    /**
     * 인터셉터를 등록한다.
     */
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(localeChangeInterceptor());
    }

}
