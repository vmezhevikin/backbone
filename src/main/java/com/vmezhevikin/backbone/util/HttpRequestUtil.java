package com.vmezhevikin.backbone.util;

import com.vmezhevikin.backbone.*;
import javax.servlet.http.*;
import org.apache.commons.lang.*;

public class HttpRequestUtil {

    public static String getFullUrl(HttpServletRequest request) {
        StringBuffer url = request.getRequestURL();
        String query = request.getQueryString();
        if (StringUtils.isNotEmpty(query)) {
            url.append('?').append(query);
        }
        return url.toString();
    }

    public static String getMethod(HttpServletRequest request) {
        return request.getMethod();
    }

    public static String getContentType(HttpServletRequest request) {
        return request.getHeader(Constants.HEADER_CONTENT);
    }

    public static String getAccept(HttpServletRequest request) {
        return request.getHeader(Constants.HEADER_ACCEPT);
    }
}
