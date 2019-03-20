
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


		// После каждого (time) интервала функция обновляет div#updatebox

		function update() {

		    var xmlhttp = getXmlHttp()

        	//Проверим первоначальный ввывод. Если не определено, то номер сообщения равен 0
        	if (typeof last_message_id == 'undefined') {
            last_message_id = 0;
        	}



        	//Из какого канала, если не установлен, то в chat


               //Проверим равно ли значение канала значению при предыдущей загрузке
               //Если канал изменился, то сбросим номер сообщения до 0


        	//Запрос (с выводом только последних)
		    xmlhttp.open('GET', "/dia/lib/view/Class_Printing.php", true);


		    xmlhttp.onreadystatechange = function() {
		        if (xmlhttp.readyState == 4) {

		            if(xmlhttp.status == 200) {

		     //Получение JSON

		            var mydata=xmlhttp.responseText;
    		        mydata= JSON.parse(mydata);




        //Переменная с текстом


      var itm, span_text;



                //clone = itm.cloneNode(true); //Клонируем
        itm = document.getElementById("parent"); //Получаем id div-a
        //span_sender = document.createElement("span"); //Создадим span для отправителя
        //span_sender.setAttribute("class", "sender"); //Установим ему атрибут class для смены стиля
        span_text = document.createElement("span");  //Создадим span для текста
        //span_sender.innerHTML = mydata[i].login + ' - > ';    //Добавим в sender имя
        span_text.innerHTML = '<span style="display:inline-block;  bottom: 200px; background-color: green; width: 10px; height: ' + mydata+'px;"></span>'; //Добавим текст и перенос строки
        //itm.appendChild(span_sender );   //Добавим span_sender к div
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
