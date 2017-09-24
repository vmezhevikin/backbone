package com.vmezhevikin.backbone.component.impl;

import javax.servlet.*;
import org.slf4j.*;
import org.springframework.stereotype.*;

@Component
public class ApplicationListener implements ServletContextListener {

    private static final Logger LOGGER = LoggerFactory
            .getLogger(ApplicationListener.class);

    @Override
    public void contextInitialized(ServletContextEvent sce) {
        LOGGER.info("Application started");
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {
        LOGGER.info("Application destroyed");
    }
}
