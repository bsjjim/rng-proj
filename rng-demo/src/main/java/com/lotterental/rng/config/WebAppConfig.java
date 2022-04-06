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
	
	@Value("${config.web-app-config.view.prefix}") 
	private String viewPrefix;
	
	@Value("${config.web-app-config.view.suffix}") 
	private String viewSuffix;
	
	@Value("${config.web-app-config.view.name}") 
	private String viewName;
	
	@Value("${config.web-app-config.resource-location}") 
	private String resourceLocation;
	
	@Value("${config.web-app-config.message-base-loc}") 
	private String messageBaseLoc;
	
	@Value("${config.web-app-config.default-encoding}") 
	private String defaultEncoding;
	
	@Value("${config.web-app-config.cache-seconds}") 
	private int cacheSeconds;
	
	@Value("${config.web-app-config.use_code_as-default-message}") 
	private boolean useCodeAsDefaultMessage;	
	
	@Value("${config.web-app-config.locale-change-interceptor.param-name}") 
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
//        registry.jsp("/WEB-INF/jsp/", ".jsp");
        registry.jsp(viewPrefix, viewSuffix);
    }


    /**
     * 루트 "/" 접속시 index 페이지로 포워딩
     */
    @Override
    @Order(Ordered.HIGHEST_PRECEDENCE + 1)
    public void addViewControllers(ViewControllerRegistry registry) {
//        registry.addViewController("/").setViewName("forward:/index.html");
        registry.addViewController("/").setViewName(viewName);
    }

    /**
     * Web Resource 경로 설정
     */
    @Override
    @Order(Ordered.HIGHEST_PRECEDENCE + 2)
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
//        registry.addResourceHandler("/_resource_/**").addResourceLocations("classpath:/static/sample/_resource_/");
//        registry.addResourceHandler("/FrameBase/**").addResourceLocations("classpath:/static/sample/FrameBase/");
//        registry.addResourceHandler("/nexacro17lib/**").addResourceLocations("classpath:/static/sample/nexacro17lib/");
//        registry.addResourceHandler("/*.json").addResourceLocations("classpath:/static/sample/");
//        registry.addResourceHandler("/*.html").addResourceLocations("classpath:/static/sample/");
//        registry.addResourceHandler("/*.js").addResourceLocations("classpath:/static/sample/");
//        registry.addResourceHandler("/**").addResourceLocations("/nx/");
    	registry.addResourceHandler("/**").addResourceLocations(resourceLocation);
    }

    /**
     * 메세지 소스를 생성한다.
     */
    @Bean
    public ReloadableResourceBundleMessageSource messageSource() {
        ReloadableResourceBundleMessageSource source = new ReloadableResourceBundleMessageSource();

        // 메세지 프로퍼티파일의 위치와 이름을 지정한다.
//        source.setBasename("classpath:/messages/message");
        source.setBasename(messageBaseLoc);

        // 기본 인코딩을 지정한다.
//        source.setDefaultEncoding("UTF-8");
        source.setDefaultEncoding(defaultEncoding);

        // 프로퍼티 파일의 변경을 감지할 시간 간격을 지정한다.
//        source.setCacheSeconds(60);
        source.setCacheSeconds(cacheSeconds);

        // 없는 메세지일 경우 예외를 발생시키는 대신 코드를 기본 메세지로 한다.
//        source.setUseCodeAsDefaultMessage(true);
        source.setUseCodeAsDefaultMessage(useCodeAsDefaultMessage);

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
//        interceptor.setinterceptorParamName("lang");
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
