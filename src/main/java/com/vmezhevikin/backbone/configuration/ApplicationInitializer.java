package com.vmezhevikin.backbone.configuration;

import com.vmezhevikin.backbone.component.impl.*;
import java.util.*;
import javax.servlet.*;
import org.springframework.web.*;
import org.springframework.web.context.*;
import org.springframework.web.context.support.*;
import org.springframework.web.filter.*;
import org.springframework.web.servlet.*;

public class ApplicationInitializer implements WebApplicationInitializer {

    @Override
    public void onStartup(ServletContext container) throws ServletException {
        WebApplicationContext context = createWebApplicationContext(container);
        container.setSessionTrackingModes(
                EnumSet.of(SessionTrackingMode.COOKIE));
        container.addListener(new ContextLoaderListener(context));
        container.addListener(context.getBean(ApplicationListener.class));
        registerFilters(container, context);
        registerSpringMVCDispatcherServlet(container, context);
    }

    private WebApplicationContext createWebApplicationContext(
            ServletContext container) {
        AnnotationConfigWebApplicationContext context = new AnnotationConfigWebApplicationContext();
        context.scan("com.vmezhevikin.backbone.configuration");
        context.setServletContext(container);
        context.refresh();
        return context;
    }

    private void registerFilters(ServletContext container,
                                 WebApplicationContext context) {
        registerFilter(container, context.getBean(RequestLoggingFilter.class), "/*");
        registerFilter(container, context.getBean(RequestBodyLoggingFilter.class), "/api/*");
        registerFilter(container, new CharacterEncodingFilter("UTF-8", true), "/*");
        registerFilter(container, new RequestContextFilter(), "/*");
    }

    private void registerFilter(ServletContext container, Filter filter, String... urlPatterns) {
        String filterName = filter.getClass().getSimpleName();
        container.addFilter(filterName, filter)
                .addMappingForUrlPatterns(null, true, urlPatterns);
    }

    private void registerSpringMVCDispatcherServlet(ServletContext container,
                                                    WebApplicationContext context) {
        ServletRegistration.Dynamic servlet = container.addServlet("dispatcher",
                new DispatcherServlet(context));
        servlet.setLoadOnStartup(1);
        servlet.addMapping("/");
    }
}
