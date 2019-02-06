'use strict';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
  // Use the jQuery document ready signal to know when everything has been initialized
  $(document).ready(function () {
    // Tell Tableau we'd like to initialize our extension
    const worksheetName = URL_ID;
   });

   tableau.extensions.dashboardContent.dashboard.worksheets.find(w => w.name ===worksheetName).getUnderlyingDataAsync().then(dataTable => {
    let field = dataTable.columns.find(column => column.fieldName === "post_or_video_id");
    let list = [];
    for (let row of dataTable.data) {
      list.push(row[field.index].value);
    }
    let values = list.filter((el, i, arr) => arr.indexOf(el) === i);
    console.log(values)
  });

    // Add an event listener for the selection changed event on this sheet.
    unregisterEventHandlerFunction = worksheet.addEventListener(tableau.TableauEventType.MarkSelectionChanged, function (selectionEvent) {
    });
  }

  
)();
