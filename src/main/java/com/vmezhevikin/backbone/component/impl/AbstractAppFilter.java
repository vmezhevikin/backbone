package com.vmezhevikin.backbone.component.impl;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import org.springframework.stereotype.*;

@Component
abstract public class AbstractAppFilter implements Filter {

    @Override
    public void init(FilterConfig fConfig) throws ServletException {
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse,
                         FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
        HttpServletResponse httpServletResponse = (HttpServletResponse) servletResponse;
        doFilter(httpServletRequest, httpServletResponse, filterChain);
    }

    abstract void doFilter(HttpServletRequest request, HttpServletResponse response, FilterChain
            chain) throws IOException, ServletException;

    @Override
    public void destroy() {
    }
}
