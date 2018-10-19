/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/** 
 * Utility scripts for decorating form fields
 */
/* eslint-env browser, es6 */
(function (nomnom) {
    'use strict';

    /* Support for updating the namehint when creating a component */
    nomnom.decorate(".namehint", {
        initCallback: function(){
            var field = this;
            this.closest('.Form-Ajax').querySelector('select[name="sling:resourceType"]').addEventListener('change',function(evt){
                var resourceType = evt.target.value.split("\/");
                field.value = resourceType[resourceType.length - 1];
            });
         }
    });
    
    /* Support for repeating form fields */
    nomnom.decorate(".repeating", {
        events : {
            ".repeating__add, .repeating__add *" : {
                click: function (event) {
                    nomnom.enhancecalm(event);
                    var div = document.createElement("div");
                    div.innerHTML = this.querySelector('.repeating__template').innerHTML;
                    this.querySelector('.repeating__container').appendChild(div);
                }
            },
            ".repeating__remove, .repeating__remove *" : {
                click: function (event) {
                    nomnom.enhancecalm(event);
                    event.target.closest('.repeating__item').remove();
                }
            }
        }
    });
}(window.nomnom = window.nomnom || {}));