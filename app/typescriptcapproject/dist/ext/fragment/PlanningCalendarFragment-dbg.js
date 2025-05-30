sap.ui.define(["sap/m/MessageToast"], function (MessageToast) {
  "use strict";

  /**
   * Generated event handler.
   *
   * @param this reference to the 'this' that the event handler is bound to.
   * @param event the event object provided by the event provider
   */
  function onPress(event) {
    MessageToast.show("Custom handler invoked.");
  }

  // import Controller from "sap/ui/core/mvc/Controller";
  // import JSONModel from "sap/ui/model/json/JSONModel";
  // // import MessageToast from "sap/m/MessageToast";
  // // import CalendarAppointment from "sap/ui/unified/CalendarAppointment";
  // // import Event from "sap/ui/base/Event";

  // export default class CustomSection extends Controller {

  //     onAfterRendering(): void {
  //         const oModel = new JSONModel({
  //             startDate: new Date(2025, 0, 15, 8, 0),
  //             people: [
  //                 {
  //                     name: "John Doe",
  //                     role: "Developer",
  //                     appointments: [
  //                         {
  //                             start: new Date(2025, 0, 8, 8, 30),
  //                             end: new Date(2025, 0, 8, 9, 30),
  //                             title: "Code Review",
  //                             info: "Project Alpha",
  //                             type: "Type01"
  //                         }
  //                     ]
  //                 },
  //                 {
  //                     name: "Peter Pan",
  //                     role: "Developer",
  //                     appointments: [
  //                         {
  //                             start: new Date(2025, 0, 8, 8, 30),
  //                             end: new Date(2025, 0, 8, 9, 30),
  //                             title: "Code Review",
  //                             info: "Project Alpha",
  //                             type: "Type01"
  //                         }
  //                     ]
  //                 }
  //             ]
  //         });

  //         const oFragmentRoot = this.byId("PlanningCalendar");
  //         if (oFragmentRoot) {
  //             oFragmentRoot.setModel(oModel, "calendar");
  //         } else {
  //             console.warn("Fragment root not found. Model not set.");
  //         }

  //         console.log("Available IDs:", this.getView()?.findAggregatedObjects(true));

  //     }
  // }
  var __exports = {
    __esModule: true
  };
  __exports.onPress = onPress;
  return __exports;
});
//# sourceMappingURL=PlanningCalendarFragment-dbg.js.map
