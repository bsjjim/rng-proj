package com.lotterental.rng.demo.config.sap;

import com.sap.conn.jco.JCoDestination;
import com.sap.conn.jco.JCoDestinationManager;
import com.sap.conn.jco.JCoException;
import com.sap.conn.jco.ext.DestinationDataProvider;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.File;
import java.io.FileOutputStream;
import java.util.Properties;

@Slf4j
@Configuration
@EnableConfigurationProperties(value = {SapProperties.class})
public class SapConfiguration {

    static String ABAP_AS = "ABAP_AS_WITHOUT_POOL";

    @Autowired
    SapProperties sapProperties;
    private final String ABAP_AS_POOLED = "ABAP_AS_WITH_POOL";

    /**
     * Establish SAP interface
     * @param name  ABAP name
     * @param suffix    file suffix
     * @param properties    file content
     */
    private void createDataFile(String name, String suffix, Properties properties){
        File cfg = new File(name+"."+suffix);
        if(cfg.exists()){
            cfg.deleteOnExit();
        }
        try{
            FileOutputStream fos = new FileOutputStream(cfg, false);
            properties.store(fos, "for tests only !");
            fos.close();
        }catch (Exception e){
            System.out.println("Create Data file fault, error msg: " + e.toString());
            throw new RuntimeException("Unable to create the destination file " + cfg.getName(), e);
        }
    }

    /**
     * Init SAP connection
     */
    private void initProperties() {

        Properties connectProperties = new Properties();
        // SAP server location
        connectProperties.setProperty(DestinationDataProvider.JCO_ASHOST, sapProperties.host);
        // SAP system number
        connectProperties.setProperty(DestinationDataProvider.JCO_SYSNR,  sapProperties.systemNumber);
        // SAP client
        connectProperties.setProperty(DestinationDataProvider.JCO_CLIENT, sapProperties.client);
        // SAP user ID
        connectProperties.setProperty(DestinationDataProvider.JCO_USER,   sapProperties.user);
        // SAP user PW
        connectProperties.setProperty(DestinationDataProvider.JCO_PASSWD, sapProperties.password);
        // SAP language
        connectProperties.setProperty(DestinationDataProvider.JCO_LANG,   sapProperties.language);
        // MAX connection
        connectProperties.setProperty(DestinationDataProvider.JCO_POOL_CAPACITY, sapProperties.capacity);
        // MAX connection threads
        connectProperties.setProperty(DestinationDataProvider.JCO_PEAK_LIMIT, sapProperties.limit);
        // SAP ROUTER
//        connectProperties.setProperty(DestinationDataProvider.JCO_SAPROUTER, sapProperties.getJCO_SAPROUTER());

        createDataFile(ABAP_AS_POOLED, "jcoDestination", connectProperties);
    }

    /**
     * Get SAP connection
     * @return  SAP connection object
     */
    @Bean
    public JCoDestination connectJCoDestination(){
        log.debug("Connecting to SAP...");
        JCoDestination jCoDestination = null;
        initProperties();
        try {
            jCoDestination = JCoDestinationManager.getDestination(ABAP_AS_POOLED);
            jCoDestination.ping();
            if (jCoDestination.isValid()) {
                log.debug("Connection estiblished.");
                log.debug("Attributes : [{}]", jCoDestination.getAttributes());
            }
        } catch (JCoException e) {
            log.debug("Connect SAP fault, error msg: " + e.toString());
        }
        return jCoDestination;
    }
}
