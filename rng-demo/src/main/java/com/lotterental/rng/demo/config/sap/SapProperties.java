package com.lotterental.rng.demo.config.sap;

import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConstructorBinding;

@Data
@ConfigurationProperties(prefix = "sap")
public class SapProperties {

    String host;
    String client;
    String systemNumber;
    String user;
    String password;
    String language;
    String capacity;
    String limit;


}
