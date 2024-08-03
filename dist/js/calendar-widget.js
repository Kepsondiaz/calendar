function $({view:o="dayGridMonth",locale:w="en",firstDay:E=1,events:b=[],eventContent:l=null,selectable:g=!1,eventClickEnabled:h=!1,eventDragEnabled:d=!1,eventResizeEnabled:i=!1,noEventsClickEnabled:y=!1,dateSelectEnabled:c=!1,dateClickEnabled:m=!1,viewDidMountEnabled:p=!1,dayMaxEvents:C=!1,moreLinkContent:v=null,resources:D=[],hasDateClickContextMenu:S=!1,hasDateSelectContextMenu:u=!1,hasEventClickContextMenu:k=!1,hasNoEventsClickContextMenu:f=!1,options:x={}}){return{calendarEl:null,init:async function(){this.calendarEl=this.$el;let t=this,n={view:o,resources:D,eventSources:[{events:(e,a,r)=>this.$wire.getEventsJs(e)}],locale:w,firstDay:E,dayMaxEvents:C,selectable:u||c,eventStartEditable:d,eventDurationEditable:i};S?n.dateClick=e=>{t.$el.querySelector("[calendar-context-menu]").dispatchEvent(new CustomEvent("calendar--open-menu",{detail:{mountData:{date:e.date,dateStr:e.dateStr,allDay:e.allDay,view:e.view,resource:e.resource},jsEvent:e.jsEvent,dayEl:e.dayEl,context:"dateClick"}}))}:m&&(n.dateClick=e=>{this.$wire.onDateClick({date:e.date,dateStr:e.dateStr,allDay:e.allDay,view:e.view,resource:e.resource})}),u?n.select=e=>{t.$el.querySelector("[calendar-context-menu]").dispatchEvent(new CustomEvent("calendar--open-menu",{detail:{mountData:{start:e.start,startStr:e.startStr,end:e.end,endStr:e.endStr,allDay:e.allDay,view:e.view,resource:e.resource},jsEvent:e.jsEvent,context:"dateSelect"}}))}:c&&(n.select=e=>{this.$wire.onDateSelect({start:e.start,startStr:e.startStr,end:e.end,endStr:e.endStr,allDay:e.allDay,view:e.view,resource:e.resource})}),l!==null&&(n.eventContent=e=>{let a=t.getEventContent(e);if(a!==void 0)return{html:a}}),v!==null&&(n.moreLinkContent=e=>({html:t.getMoreLinkContent(e)})),h&&(n.eventClick=e=>{if(e.event.extendedProps.url){let a=e.event.extendedProps.url_target??"_blank";window.open(e.event.extendedProps.url,a)}else k?t.$el.querySelector("[calendar-context-menu]").dispatchEvent(new CustomEvent("calendar--open-menu",{detail:{mountData:{event:e.event,view:e.view},jsEvent:e.jsEvent,context:"eventClick"}})):this.$wire.onEventClick({event:e.event,view:e.view})}),y&&(n.noEventsClick=e=>{f?t.$el.querySelector("[calendar-context-menu]").dispatchEvent(new CustomEvent("calendar--open-menu",{detail:{mountData:{view:e.view},jsEvent:e.jsEvent,context:"noEventsClick"}})):this.$wire.onNoEventsClick({view:e.view})}),n.eventResize=async e=>{let a=e.event.durationEditable,r=i;a!==void 0&&(r=a),r&&await this.$wire.onEventResize({event:e.event,oldEvent:e.oldEvent,endDelta:e.endDelta,view:e.view}).then(s=>{s===!1&&e.revert()})},n.eventDrop=async e=>{let a=e.event.startEditable,r=d;a!==void 0&&(r=a),r&&await this.$wire.onEventDrop({event:e.event,oldEvent:e.oldEvent,oldResource:e.oldResource,newResource:e.newResource,delta:e.delta,view:e.view}).then(s=>{s===!1&&e.revert()})},p&&(n.viewDidMount=e=>{this.$wire.onViewDidMount({view:e})}),this.ec=new EventCalendar(this.$el.querySelector("div"),{...n,...x}),window.addEventListener("ec-add-event",this.addEvent),window.addEventListener("calendar--refresh",()=>this.ec.refetchEvents())},addEvent:function(t){this.ec.addEvent(t)},getEventContent:function(t){if(typeof l=="string")return this.wrapContent(l,t);if(typeof l=="object"){let n=t.event.extendedProps.model,e=l[n];return e===void 0?void 0:this.wrapContent(e,t)}},getMoreLinkContent:function(t){return this.wrapContent(v,t)},wrapContent:function(t,n){let e=document.createElement("div");return e.innerHTML=t,e.setAttribute("x-data",JSON.stringify(n)),e.classList.add("w-full"),e.outerHTML}}}export{$ as default};
