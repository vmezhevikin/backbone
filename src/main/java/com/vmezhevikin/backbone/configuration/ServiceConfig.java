package com.vmezhevikin.backbone.configuration;

import java.io.*;
import org.springframework.context.annotation.*;
import org.springframework.context.support.*;
import org.springframework.core.io.*;

@Configuration
@ComponentScan({"com.vmezhevikin.backbone.component.impl", "com.vmezhevikin.backbone.service.impl",
        "com.vmezhevikin.backbone.controller"})
public class ServiceConfig {

    @Bean
    public static PropertySourcesPlaceholderConfigurer placeholderConfigurer()
            throws IOException {
        PropertySourcesPlaceholderConfigurer configurer = new PropertySourcesPlaceholderConfigurer();
        configurer.setLocation(new ClassPathResource("application.properties"));
        return configurer;
    }
}
