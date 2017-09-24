package com.vmezhevikin.backbone.component.impl;

import com.vmezhevikin.backbone.util.*;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import org.apache.commons.io.*;
import org.slf4j.*;
import org.springframework.stereotype.*;

@Component
public class RequestBodyLoggingFilter extends AbstractAppFilter {

    private static final Logger LOGGER = LoggerFactory
            .getLogger(RequestBodyLoggingFilter.class);

    @Override
    public void doFilter(HttpServletRequest request, HttpServletResponse response,
                         FilterChain chain) throws IOException, ServletException {
        ResettableStreamHttpServletRequest wrappedRequest = new ResettableStreamHttpServletRequest(request);
        HttpServletResponseCopier responseCopier = new HttpServletResponseCopier(response);
        LOGGER.info("--------------------------------------");
        LOGGER.info("Method: {}", HttpRequestUtil.getMethod(request));
        LOGGER.info("Content-Type: {}", HttpRequestUtil.getContentType(request));
        LOGGER.info("Accept: {}", HttpRequestUtil.getAccept(request));
        LOGGER.info("Request body: {}", IOUtils.toString(wrappedRequest.getReader()));
        wrappedRequest.resetInputStream();
        chain.doFilter(wrappedRequest, responseCopier);
        responseCopier.flushBuffer();
        LOGGER.info("Response body: {}", new String(responseCopier.getCopy()));
    }
}
