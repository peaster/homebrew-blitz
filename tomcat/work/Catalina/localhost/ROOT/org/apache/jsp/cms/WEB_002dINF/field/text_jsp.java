/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/8.0.5
 * Generated at: 2016-01-13 16:35:43 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.cms.WEB_002dINF.field;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import com.psddev.cms.db.ToolUi;
import com.psddev.cms.tool.ToolPageContext;
import com.psddev.dari.db.ObjectField;
import com.psddev.dari.db.Reference;
import com.psddev.dari.db.ReferentialText;
import com.psddev.dari.db.State;
import com.psddev.dari.util.ObjectUtils;
import java.util.Set;

public final class text_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, false, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      out = pageContext.getOut();
      _jspx_out = out;



// --- Logic ---

ToolPageContext wp = new ToolPageContext(pageContext);

State state = State.getInstance(request.getAttribute("object"));

ObjectField field = (ObjectField) request.getAttribute("field");
ToolUi ui = field.as(ToolUi.class);
String fieldName = field.getInternalName();
Object fieldValue = state.getValue(fieldName);

String inputName = (String) request.getAttribute("inputName");

String placeholder = ui.getPlaceholder();
if (field.isRequired()) {
    if (ObjectUtils.isBlank(placeholder)) {
        placeholder = "(Required)";
    } else {
        placeholder += " (Required)";
    }
}

if (ObjectUtils.isBlank(placeholder)) {
    placeholder = "";
}

Number suggestedMinimum = ui.getSuggestedMinimum();
Number suggestedMaximum = ui.getSuggestedMaximum();

if ((Boolean) request.getAttribute("isFormPost")) {
    String newValue = wp.param(String.class, inputName);

    if (ui.isRichText()) {
        StringBuilder newValueBuilder = new StringBuilder();

        for (Object item : new ReferentialText(newValue, Boolean.TRUE.equals(request.getAttribute("finalDraft")))) {
            if (!(item == null || item instanceof Reference)) {
                newValueBuilder.append(item.toString());
            }
        }

        newValue = newValueBuilder.toString();

        if (newValue.matches("(?i)<br[^>]*/?>")) {
            newValue = null;
        }
    }

    state.put(fieldName, newValue);
    return;
}

// --- Presentation ---

wp.write("<div class=\"inputSmall inputSmall-text\">");

Set<ObjectField.Value> validValues = field.getValues();
if (validValues != null) {
    wp.write("<select id=\"", wp.getId(), "\" name=\"", wp.h(inputName), "\">");
    wp.write("<option value=\"\">");
    wp.write(wp.h(placeholder));
    wp.write("</option>");
    for (ObjectField.Value value : validValues) {
        wp.write("<option");
        if (ObjectUtils.equals(value.getValue(), fieldValue)) {
            wp.write(" selected");
        }
        wp.write(" value=\"", wp.h(value.getValue()), "\">");
        wp.write(wp.h(value.getLabel()));
        wp.write("</option>");
    }
    wp.write("</select>");

} else if (ui.isColorPicker()) {
    wp.writeElement("input",
            "type", "text",
            "class", "color",
            "name", inputName,
            "placeholder", placeholder,
            "value", fieldValue);

} else if (ui.isSecret()) {
    wp.writeElement("input",
            "type", "password",
            "id", wp.getId(),
            "name", inputName,
            "placeholder", placeholder,
            "value", fieldValue);

} else {
    wp.writeStart("textarea",
            "class", ui.isRichText() ? "richtext" : null,
            "id", wp.getId(),
            "name", inputName,
            "placeholder", placeholder,
            "data-dynamic-placeholder", ui.getPlaceholderDynamicText(),
            "data-dynamic-field-name", field.getInternalName(),
            "data-code-type", ui.getCodeType(),
            "data-editable-placeholder", ui.isPlaceholderEditable() ? ui.getPlaceholder() : null,
            "data-suggested-maximum", suggestedMaximum != null ? suggestedMaximum.intValue() : null,
            "data-suggested-minimum", suggestedMinimum != null ? suggestedMinimum.intValue() : null,
            "data-inline", true,
            "data-user", wp.getObjectLabel(wp.getUser()),
            "data-user-id", wp.getUser() != null ? wp.getUser().getId() : null,
            "data-first-draft", Boolean.TRUE.equals(request.getAttribute("firstDraft")),
            "data-track-changes", !Boolean.TRUE.equals(request.getAttribute("finalDraft")));
        wp.writeHtml(fieldValue);
    wp.writeEnd();
}

wp.write("</div>");

      out.write('\n');
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
