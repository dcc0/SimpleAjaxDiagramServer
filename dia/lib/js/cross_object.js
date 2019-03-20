
<script>

		// Кроссбраузерное создание объекта дл запроса . Обновление чата

		function getXmlHttp(){
		    var xmlhttp;
		    try {

		        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
		    } catch (e) {

		       try {
		       xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		       } catch (E) {
		          xmlhttp = false;
		       }
		    }
		    if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
		       xmlhttp = new XMLHttpRequest();
		    }

		    return xmlhttp;
		}


		function update() {

		    var xmlhttp = getXmlHttp()
        	//Запрос
		    xmlhttp.open('GET', "/dia/lib/view/Class_Printing.php", true);

		    xmlhttp.onreadystatechange = function() {
		        if (xmlhttp.readyState == 4) {

		            if(xmlhttp.status == 200) {

		     //Получение JSON

		            var mydata=xmlhttp.responseText;

      var itm, span_text;

        itm = document.getElementById("parent"); //Получаем id div-a
        span_text = document.createElement("span");  //Создадим span для текста
        span_text.innerHTML = '<span style="display:inline-block;  bottom: 200px; background-color: green; width: 10px; height: ' + mydata+'px;"></span>'; //Добавим текст и перенос строки
        itm.appendChild(span_text); //Добавим text к div

		            }
		        }
		    };
    xmlhttp.send(null);

		}
	//Каждые 30 минут обновим окно
   window.setInterval('refresh()', 1800000000); 	// Call a function every 1800000000 milliseconds (OR 30 mins).

                       // Refresh or reload page.
                         function refresh() {
                         window .location.reload();
                      }

		// Таймер
		var time = 1000;
	setInterval("update()", time);

</script>
