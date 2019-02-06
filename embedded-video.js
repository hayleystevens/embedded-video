'use strict';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
  // Use the jQuery document ready signal to know when everything has been initialized
  $(document).ready(function () {
    // Tell Tableau we'd like to initialize our extension
   });

	function listenToMarksSelection() {
            viz.addEventListener(tableau.TableauEventName.MARKS_SELECTION, onMarksSelection);
        }

        function onMarksSelection(marksEvent) {
            return marksEvent.getMarksAsync().then(reportSelectedMarks);
        }

)();
