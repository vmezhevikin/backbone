package com.vmezhevikin.backbone.component.impl;

import com.vmezhevikin.backbone.util.*;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import org.slf4j.*;
import org.springframework.stereotype.*;

@Component
public class RequestLoggingFilter extends AbstractAppFilter {

    private static final Logger LOGGER = LoggerFactory
            .getLogger(RequestLoggingFilter.class);

    @Override
    public void doFilter(HttpServletRequest request, HttpServletResponse response, FilterChain
            chain) throws IOException, ServletException {
        try {
            LOGGER.info("Request: {} {}", HttpRequestUtil.getMethod(request), HttpRequestUtil.getFullUrl(request));
            chain.doFilter(request, response);
        } catch (Throwable th) {
            LOGGER.error("Internal error", th);
            response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        }
    }
}
