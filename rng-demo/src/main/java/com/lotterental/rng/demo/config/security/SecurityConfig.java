package com.lotterental.rng.demo.config.security;

import com.lotterental.rng.demo.config.security.AcsDeniedHandler;
import com.lotterental.rng.demo.config.security.AuthEntryPoint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    AuthEntryPoint authEntryPoint;

    @Autowired
    AcsDeniedHandler acsDeniedHandler;


    // 정적 자원에 대해서는 Security 설정을 적용하지 않음.
    @Override
    public void configure(WebSecurity web) {
        web.ignoring().requestMatchers(PathRequest.toStaticResources().atCommonLocations());
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http
        .csrf().disable()
        .exceptionHandling()
        .authenticationEntryPoint(authEntryPoint)
        .accessDeniedHandler(acsDeniedHandler)

        .and()
        .sessionManagement()
        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)

        .and()
        .authorizeRequests()
        .antMatchers(HttpMethod.OPTIONS, "*/**").permitAll()
//        .antMatchers("/nap/**").permitAll()
        .antMatchers(
                "/**",
                "/favicon.ico"
        ).permitAll()
        .anyRequest().authenticated()
        .and()
//        .apply(new JwtSecurityConfig(tokenProvider));

        .addFilterBefore(customAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);

    }

//    @Bean
//    public CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration configuration = new CorsConfiguration();
//        //configuration.addAllowedOrigin("*");
//        configuration.addAllowedOriginPattern("*");
//        configuration.addAllowedHeader("*");
//        configuration.addAllowedMethod("*");
//        configuration.setAllowCredentials(false);
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", configuration);
//        return source;
//    }

//    @Bean
//    public DaoAuthenticationProvider authProvider() {
//        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
//        authProvider.setUserDetailsService(napJwtUserDetails());
//        authProvider.setPasswordEncoder(bCryptPasswordEncoder());
//        return authProvider;
//    }

    @Bean public CustomAuthenticationFilter customAuthenticationFilter() throws Exception {
        CustomAuthenticationFilter customAuthenticationFilter = new CustomAuthenticationFilter(authenticationManager());
        customAuthenticationFilter.setFilterProcessesUrl("/user/login");
        customAuthenticationFilter.setAuthenticationSuccessHandler(customLoginSuccessHandler());
        customAuthenticationFilter.afterPropertiesSet();
        return customAuthenticationFilter;
    }

    @Bean public CustomLoginSuccessHandler customLoginSuccessHandler() {
        return new CustomLoginSuccessHandler();
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }


//    @Bean
//    public HttpSessionStrategy httpSessionStrategy() {
//        return new HeaderHttpSessionStrategy();
//    }

}
