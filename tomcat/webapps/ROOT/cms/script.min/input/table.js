define(["jquery","bsp-utils","jquery.handsontable.full"],function(n,e){e.onDomInsert(document,".spreadsheet",{insert:function(e){var t,a,i=n(e),s=i.attr("data-input-name"),o=[];i.find("tr").each(function(){var e=[];o.push(e),n(this).find("td").each(function(){e.push(n(this).text())})}),0===o.length&&o.push([""]),t=n("<div/>",{}),a=n("<input/>",{type:"hidden",name:s+".json"}),i.after(t),i.after(a),i.remove(),t.handsontable({data:o,rowHeaders:!0,colHeaders:!0,minSpareRows:1,minSpareCols:1,fillHandle:!1,contextMenu:!0,onChange:function(){a.val(JSON.stringify(o))}})}})});