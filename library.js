(function(window){
    function defineGobhajuLib() {
        var GobhajuLib = {};
        GobhajuLib.hello = () => {
            alert('Gobhaju Lib is saying hello');
        }

        GobhajuLib.changeClass = (input,output) => {
            try {
                let htmlCollection = document.getElementsByClassName(input);
                var elms = Array.from(htmlCollection);
                elms.forEach(elm => {
                    elm.classList.remove(input);
                    elm.classList.add(output);                        
                });
            } catch (error) {
                console.error(error)
            }
        }

        // get Datasets
        GobhajuLib.getDataSet = (selector) => {
            try {
                let elem = document.querySelector(selector);
                let dataArray = elem.dataset;
                //var data_set = Array.from(dataArray);
                let dataSet = Object.assign({}, dataArray) 
                return dataSet;
            } catch (error) {
                console.error(error);
            }
        }

        //insert new dom
        GobhajuLib.insertDOM = (selector,insert) => {
            try{
                let elem = document.querySelector(selector);
                let newNode = document.createElement(insert);
                elem.appendChild(newNode);
            }catch(error) {
                console.error(error);
            }
        }

        // ajax request
        GobhajuLib.ajax = (method,url,params="") => {
            try {
                var xhttp = new XMLHttpRequest();
                xhttp.open(method, url, true);
                if(method == "GET") {
                    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                }else {
                    xhttp.setRequestHeader("Content-Type", "application/json");
                }

                xhttp.onreadystatechange = function() {
                   if (this.readyState == 4 && this.status == 200) {                
                      return this.responseText;                       
                   }
                };
                xhttp.send(params);                

            }catch(error) {
                console.error(error);
            }
        }

        //get input value
        GobhajuLib.getInputValue = (inputName) => {
            try{
                let elm = document.querySelector(`input[name="${inputName}"]`);
                return elm.value;    
            }catch(error) {console.error(error)}
        }
        //set input value
        GobhajuLib.setInputValue = (inputName, value) => {
            try{
                let elm = document.querySelector(`input[name="${inputName}"]`);
                elm.value= value;
            }catch(error) {console.error(error)}
        }
        //get checkbox value
        GobhajuLib.getCheckBoxValue = (inputName) => {
            try{
                let elms = document.querySelectorAll(`input[name="${inputName}"]:checked`);
                let elements = [...elms];
                var checkedValue = [];
                elements.forEach(item=>{
                    checkedValue = [...checkedValue, item.value ];
                })
                return checkedValue;
            }catch(error) {console.error(error)}
        }
        //set checkbox value
        GobhajuLib.setCheckBoxValue = (inputName, inputValue) => {
            try{
                let elms = document.querySelectorAll(`input[name="${inputName}"]`);
                let elements = [...elms];
                elements.forEach(item=>{
                    if(item.value == inputValue) {
                        item.setAttribute('checked',true);
                    }
                })
                                
            }catch(error) {console.error(error)}
        }

        //get selectbox selected value
        GobhajuLib.getSelectValue = (inputName) => {
            try{
                let elm = document.querySelector(`select[name="${inputName}"]`);
                return elm.value;    
            }catch(error) {console.error(error)}
        }
        //set selectbox value
        GobhajuLib.setSelectValue = (inputName, inputValue) => {
            try{
                let elms = document.querySelectorAll(`select[name="${inputName}"] option`);
                let elements = [...elms];
                elements.forEach(item=>{
                    if(item.value == inputValue) {
                        item.setAttribute('selected',true);
                    }else {
                        item.removeAttribute('selected');
                    }
                })

            }catch(error) {console.error(error)}
        }


        return GobhajuLib;
    } 
    if(typeof(GobhajuLib) === 'undefined') {
        window.GobhajuLib = defineGobhajuLib();
    }
})(window);