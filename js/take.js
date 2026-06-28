$(document).ready(function() {
  $(document).on('click', '.marker', function() {
    markAsPresent($(this));
  });
  $('#submit').on('click',function() {
    submitData();
  });
  $(document).on('click', '.delete-roll', function() {
    deleteWarning($(this).closest('.student-record').find('.roll').text());
  });
  $(document).on('click', '.delete-rollnumber', function() {
    deleteRoll($('.warning-roll').text());
  });
  $(document).tooltip({
    selector: '.roll, .present, .marker, .delete-roll',
    placement: 'top'
  });
});
function deleteWarning(roll) {
  $('.warning-roll').html(roll);
}
function deleteRoll(roll) {
  $.ajax({
    url : 'php/delete_roll.php',
    type : 'post',
    data : {roll:roll,class_id:class_id},
    dataType : 'json',
    success : function (r) {
      console.log(r);
      switch(r.error) {
        case 'not_found' : 
          alert('We are facing some issues, logging you out for security .');
          window.location = "logout.php";
        break;
        case 'roll_not_found' : 
          alert('You might have already delete this roll number. Please refresh the page');
          window.location = "";
        break;
        case 'none' : 
          $('.student-record').each(function(k,v) {
            if($(this).find('.roll').text() == roll) {
              $(this).hide('slow',function() {
                $(this).remove();
              });
              return;
            }
          });
          $('.delete-warning').modal('hide');
        break;
        
      }
    }
  });
}
function submitData() {
  var data = [];
  var time = Math.round((new Date).getTime()/1000);
  $('.student-record').each(function(k,v) {
    var d = {
      roll:$(this).find('.roll').text(),
      newpresent:$(this).find('.present').text(),
      timestamp:time
    };
    data.push(d);
  });
  console.log(data);
  $.ajax({
    url : 'php/mark_attendance.php',
    type : 'post',
    data : {content:data,class_id:class_id,teacher_id:teacher_id},
    dataType : 'json',
    success : function(r) {
      console.log(r);
      if(r.error == 'none') {
        $('#submit').html('Saved!');
        $('#studentRecords').hide('slow',function() {
          $('#studentRecords').html('<h2> Saved! Redirecting you to home page </h2>');
        });
        $('#studentRecords').show('fast',function () {
          setTimeout(function() {
            var ext = window.location.pathname.endsWith('.html') ? '.html' : '.php';
            window.location = "teacher" + ext;
          },1500);
        });
      }
    },
    error : function() {
      console.log('error');
    }
  });
}

function markAsPresent(marker) {
  markerParent = marker.parent();
  present = markerParent.find('.present');
  numPresents = parseInt(present.text());
  if(marker.text() == 'A') {
    marker.html('P');
    marker.css('font-weight','bold');
    marker.addClass('btn-success');
    present.html( numPresents+1 );
  } else {
    marker.css('font-weight','');
    marker.html('A');
    marker.removeClass('btn-success');
    present.html( numPresents-1 );
  }
}