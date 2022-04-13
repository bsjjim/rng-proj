package com.lotterental.rng.config;


import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;

@Configuration
public class DBConfig {

    @Bean(destroyMethod = "close")
    @ConfigurationProperties("spring.datasource.hikari")
    public DataSource dataSource() {
        return DataSourceBuilder.create().build();
    }

    @Bean
    public SqlSessionFactory sqlSessionFactory(
    		@Value("${rng.db.mybatis.config.location}") String configLocationPath,
    		@Value("${rng.db.mybatis.mapper.location}") String mapperLocationPath,
    		@Value("${rng.db.mybatis.aliases.package}") String typeAliasesPackage) throws Exception {
    	Resource configLocation = new PathMatchingResourcePatternResolver().getResource(configLocationPath);
		Resource[] mapperLocations = new PathMatchingResourcePatternResolver().getResources(mapperLocationPath);
    	SqlSessionFactoryBean sqlSessionFactory = new SqlSessionFactoryBean();
		sqlSessionFactory.setDataSource(dataSource());
		sqlSessionFactory.setTypeAliasesPackage(typeAliasesPackage);
		sqlSessionFactory.setConfigLocation(configLocation);
		sqlSessionFactory.setMapperLocations(mapperLocations);
		return sqlSessionFactory.getObject();
    }

    @Bean("sqlSession")
    SqlSessionTemplate sqlSession(SqlSessionFactory sqlSessionFactory) throws Exception {
        return new SqlSessionTemplate(sqlSessionFactory);
    }

    @Bean
    public PlatformTransactionManager transactionManager() {
        DataSourceTransactionManager transactionManager = new DataSourceTransactionManager(dataSource());
        transactionManager.setGlobalRollbackOnParticipationFailure(false);
        return transactionManager;
    }
    
}
