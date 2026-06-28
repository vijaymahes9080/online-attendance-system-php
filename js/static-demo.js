// Static Demo Mock Database and Router
(function() {
  // Initialize Database
  function initDatabase() {
    if (localStorage.getItem('attendance_init')) return;

    var initialTeachers = [
      {
        teacher_id: "1",
        name: "Vijay Mahes",
        email: "vijay@demo.com",
        phone: "9876543210",
        password: "password"
      }
    ];

    var initialClasses = [
      {
        class_id: "101",
        teacher_id: "1",
        code: "COE-216",
        section: "1",
        year: "2026",
        semester: "4",
        start: "201/CO/12",
        end: "210/CO/12",
        days: 10,
        records: {
          "201/CO/12": { present: 8, timeline: { "1782643200": 1, "1782729600": 1, "1782816000": 1, "1782902400": 0, "1782988800": 1, "1783075200": 1, "1783161600": 1, "1783248000": 0, "1783334400": 1, "1783420800": 1 } },
          "202/CO/12": { present: 4, timeline: { "1782643200": 0, "1782729600": 1, "1782816000": 0, "1782902400": 1, "1782988800": 0, "1783075200": 1, "1783161600": 0, "1783248000": 1, "1783334400": 0, "1783420800": 0 } },
          "203/CO/12": { present: 9, timeline: { "1782643200": 1, "1782729600": 1, "1782816000": 1, "1782902400": 1, "1782988800": 1, "1783075200": 1, "1783161600": 1, "1783248000": 1, "1783334400": 0, "1783420800": 1 } },
          "204/CO/12": { present: 7, timeline: { "1782643200": 1, "1782729600": 0, "1782816000": 1, "1782902400": 1, "1782988800": 1, "1783075200": 0, "1783161600": 1, "1783248000": 1, "1783334400": 0, "1783420800": 1 } },
          "205/CO/12": { present: 5, timeline: { "1782643200": 0, "1782729600": 1, "1782816000": 0, "1782902400": 1, "1782988800": 0, "1783075200": 1, "1783161600": 0, "1783248000": 1, "1783334400": 1, "1783420800": 0 } },
          "206/CO/12": { present: 3, timeline: { "1782643200": 0, "1782729600": 0, "1782816000": 1, "1782902400": 0, "1782988800": 0, "1783075200": 1, "1783161600": 0, "1783248000": 0, "1783334400": 1, "1783420800": 0 } },
          "207/CO/12": { present: 10, timeline: { "1782643200": 1, "1782729600": 1, "1782816000": 1, "1782902400": 1, "1782988800": 1, "1783075200": 1, "1783161600": 1, "1783248000": 1, "1783334400": 1, "1783420800": 1 } },
          "208/CO/12": { present: 8, timeline: { "1782643200": 1, "1782729600": 1, "1782816000": 1, "1782902400": 1, "1782988800": 0, "1783075200": 1, "1783161600": 1, "1783248000": 1, "1783334400": 0, "1783420800": 1 } },
          "209/CO/12": { present: 9, timeline: { "1782643200": 1, "1782729600": 1, "1782816000": 1, "1782902400": 1, "1782988800": 1, "1783075200": 0, "1783161600": 1, "1783248000": 1, "1783334400": 1, "1783420800": 1 } },
          "210/CO/12": { present: 6, timeline: { "1782643200": 0, "1782729600": 1, "1782816000": 1, "1782902400": 0, "1782988800": 1, "1783075200": 1, "1783161600": 0, "1783248000": 1, "1783334400": 0, "1783420800": 1 } }
        }
      },
      {
        class_id: "102",
        teacher_id: "1",
        code: "COE-322",
        section: "2",
        year: "2026",
        semester: "6",
        start: "301/CO/12",
        end: "305/CO/12",
        days: 5,
        records: {
          "301/CO/12": { present: 5, timeline: { "1782643200": 1, "1782729600": 1, "1782816000": 1, "1782902400": 1, "1782988800": 1 } },
          "302/CO/12": { present: 4, timeline: { "1782643200": 1, "1782729600": 1, "1782816000": 0, "1782902400": 1, "1782988800": 1 } },
          "303/CO/12": { present: 2, timeline: { "1782643200": 0, "1782729600": 1, "1782816000": 0, "1782902400": 1, "1782988800": 0 } },
          "304/CO/12": { present: 5, timeline: { "1782643200": 1, "1782729600": 1, "1782816000": 1, "1782902400": 1, "1782988800": 1 } },
          "305/CO/12": { present: 3, timeline: { "1782643200": 1, "1782729600": 0, "1782816000": 1, "1782902400": 0, "1782988800": 1 } }
        }
      }
    ];

    localStorage.setItem('teachers', JSON.stringify(initialTeachers));
    localStorage.setItem('classes', JSON.stringify(initialClasses));
    localStorage.setItem('attendance_init', 'true');
  }

  initDatabase();

  // Helper function to get database tables
  function getTeachers() {
    return JSON.parse(localStorage.getItem('teachers') || '[]');
  }
  function setTeachers(teachers) {
    localStorage.setItem('teachers', JSON.stringify(teachers));
  }
  function getClasses() {
    return JSON.parse(localStorage.getItem('classes') || '[]');
  }
  function setClasses(classes) {
    localStorage.setItem('classes', JSON.stringify(classes));
  }

  // Session simulator
  function getCurrentTeacher() {
    var teacher = sessionStorage.getItem('current_teacher');
    return teacher ? JSON.parse(teacher) : null;
  }
  function setCurrentTeacher(teacher) {
    if (teacher) {
      sessionStorage.setItem('current_teacher', JSON.stringify(teacher));
    } else {
      sessionStorage.removeItem('current_teacher');
    }
  }

  // Helper to generate roll numbers range
  function generateRollNumbers(start, end) {
    var regex = /^([0-9]{3})\/([a-zA-Z]{2})\/([0-9]{2})$/;
    var mStart = start.match(regex);
    var mEnd = end.match(regex);
    if (!mStart || !mEnd) return {};
    
    var sNum = parseInt(mStart[1]);
    var eNum = parseInt(mEnd[1]);
    var dept = mStart[2];
    var yr = mStart[3];
    var suffix = "/" + dept + "/" + yr;
    
    var records = {};
    for (var i = sNum; i <= eNum; i++) {
      var rollStr = String(i).padStart(3, '0') + suffix;
      records[rollStr] = { present: 0, timeline: {} };
    }
    return records;
  }

  // Intercept jQuery AJAX calls
  var originalAjax = $.ajax;
  $.ajax = function(options) {
    var url = options.url;
    var data = options.data || {};
    var success = options.success;
    var error = options.error;
    var response = { error: 'none' };

    console.log('[Mock AJAX] Request to: ', url, 'Data:', data);

    try {
      if (url.indexOf('process_login.php') !== -1) {
        var teachers = getTeachers();
        var teacher = teachers.find(function(t) { return t.email === data.email; });
        if (!teacher) {
          response = { error: 'not_found' };
        } else if (teacher.password !== data.password) {
          response = { error: 'incorrect' };
        } else {
          setCurrentTeacher(teacher);
          response = { error: 'none' };
        }
      } 
      else if (url.indexOf('process_signup.php') !== -1) {
        var teachers = getTeachers();
        var exists = teachers.some(function(t) { return t.email === data.email; });
        if (exists) {
          response = { error: 'exists' };
        } else {
          var newId = String(teachers.length + 1);
          var newTeacher = {
            teacher_id: newId,
            name: data.name,
            email: data.email,
            phone: data.phone,
            password: data.password
          };
          teachers.push(newTeacher);
          setTeachers(teachers);
          response = { error: 'none' };
        }
      }
      else if (url.indexOf('add_class.php') !== -1) {
        var teacher = getCurrentTeacher();
        if (!teacher) {
          response = { error: 'failure' };
        } else {
          var classes = getClasses();
          var classId = String(classes.length + 101);
          var newClass = {
            class_id: classId,
            teacher_id: teacher.teacher_id,
            code: data.code.toUpperCase(),
            section: data.section,
            year: data.year,
            semester: data.semester,
            start: data.start.toUpperCase(),
            end: data.end.toUpperCase(),
            days: 0,
            records: generateRollNumbers(data.start.toUpperCase(), data.end.toUpperCase())
          };
          classes.push(newClass);
          setClasses(classes);
          response = {
            error: 'none',
            class_id: classId,
            code: newClass.code,
            section: newClass.section,
            year: newClass.year
          };
        }
      }
      else if (url.indexOf('delete_class.php') !== -1) {
        var classes = getClasses();
        var initialLen = classes.length;
        classes = classes.filter(function(c) {
          return !(c.code === data.code && c.year === data.year && c.section === data.section);
        });
        if (classes.length === initialLen) {
          response = { error: 'not_found' };
        } else {
          setClasses(classes);
          response = { error: 'none' };
        }
      }
      else if (url.indexOf('delete_roll.php') !== -1) {
        var classes = getClasses();
        var cls = classes.find(function(c) { return c.class_id === String(data.class_id); });
        if (cls && cls.records && cls.records[data.roll]) {
          delete cls.records[data.roll];
          setClasses(classes);
          response = { error: 'none' };
        } else {
          response = { error: 'roll_not_found' };
        }
      }
      else if (url.indexOf('mark_attendance.php') !== -1) {
        var classes = getClasses();
        var cls = classes.find(function(c) { return c.class_id === String(data.class_id); });
        if (cls) {
          cls.days = parseInt(cls.days) + 1;
          // data.content is an array of { roll: roll, newpresent: count, timestamp: ts }
          // Or wait, when serialized by jQuery, data.content might be structured as properties content[0][roll], content[0][newpresent], etc.
          // Let's parse jQuery serialized array format or exact format:
          var items = [];
          // Parse jQuery structure for nested content array
          for (var key in data) {
            if (key.indexOf('content[') === 0) {
              var parts = key.split(']['); // content[0 , roll]
              var index = parseInt(parts[0].replace('content[', ''));
              var prop = parts[1].replace(']', '');
              if (!items[index]) items[index] = {};
              items[index][prop] = data[key];
            }
          }
          if (items.length === 0 && Array.isArray(data.content)) {
            items = data.content;
          }

          items.forEach(function(item) {
            var r = cls.records[item.roll];
            if (r) {
              var oldPresent = parseInt(r.present) || 0;
              var newPresent = parseInt(item.newpresent) || 0;
              r.present = newPresent;
              if (!r.timeline) r.timeline = {};
              // Determine if student was present (newpresent is greater than before, or present for this specific marked state)
              var wasPresent = (newPresent > oldPresent) ? 1 : 0;
              r.timeline[item.timestamp || Math.round(Date.now()/1000)] = wasPresent;
            }
          });
          setClasses(classes);
          response = { error: 'none' };
        } else {
          response = { error: 'failure' };
        }
      }
      else if (url.indexOf('get_attendance.php') !== -1) {
        var classes = getClasses();
        var code = data.code ? data.code.toUpperCase() : '';
        var cls = classes.find(function(c) {
          return c.code === code && c.year === String(data.year) && c.section === String(data.section);
        });
        if (!cls) {
          response = { error: 'NO_RECORD' };
        } else {
          var cleanRoll = data.roll ? data.roll.toUpperCase() : '';
          var studentRec = cls.records[cleanRoll];
          if (!studentRec) {
            response = { error: 'NOT_IN_RECORDS' };
          } else {
            var totalDays = parseInt(cls.days) || 0;
            var presentDays = parseInt(studentRec.present) || 0;
            var percent = totalDays === 0 ? 0 : (presentDays / totalDays) * 100;
            
            // Get teacher name
            var teachers = getTeachers();
            var teacher = teachers.find(function(t) { return t.teacher_id === cls.teacher_id; });
            var teacherName = teacher ? teacher.name : 'Unknown';

            response = {
              error: 'none',
              teacher: teacherName,
              count: totalDays,
              timeline: studentRec.timeline || {},
              percent: percent
            };
          }
        }
      }
      else if (url.indexOf('update_profile.php') !== -1) {
        var teacher = getCurrentTeacher();
        if (!teacher) {
          response = { error: 'not_found' };
        } else {
          var teachers = getTeachers();
          var tIdx = teachers.findIndex(function(t) { return t.teacher_id === teacher.teacher_id; });
          if (tIdx !== -1) {
            teachers[tIdx].name = data.name;
            teachers[tIdx].phone = data.phone;
            teachers[tIdx].email = data.email;
            setTeachers(teachers);
            setCurrentTeacher(teachers[tIdx]);
            response = { error: 'none' };
          } else {
            response = { error: 'failure' };
          }
        }
      }
    } catch (e) {
      console.error('[Mock AJAX] Error: ', e);
      response = { error: 'db_error' };
    }

    if (success) {
      setTimeout(function() {
        success(response);
      }, 50);
    }
    
    return {
      fail: function(cb) { return this; },
      done: function(cb) { if (cb) { setTimeout(function() { cb(response); }, 50); } return this; }
    };
  };

  // Static Page Renderer
  window.initStaticPage = function() {
    var path = window.location.pathname;
    var page = path.substring(path.lastIndexOf('/') + 1);
    if (page === '') page = 'index.html';

    var teacher = getCurrentTeacher();

    // Route guards
    if (page === 'teacher.html' || page === 'take.html' || page === 'profile.html' || page === 'statistics.html') {
      if (!teacher) {
        window.location.href = 'index.html';
        return;
      }
    }

    // Populate Navigation and Footer Credits
    if (teacher) {
      $('.navbar-right').html(
        '<li><a href="teacher.html">Dashboard</a></li>' +
        '<li><a href="profile.html">Profile</a></li>' +
        '<li><a href="statistics.html">Statistics</a></li>' +
        '<li><a href="#about">About</a></li>' +
        '<li><a href="#contact">Contact</a></li>' +
        '<li><a href="#" id="logout-btn">Logout</a></li>'
      );
      $('#logout-btn').click(function(e) {
        e.preventDefault();
        setCurrentTeacher(null);
        window.location.href = 'index.html';
      });
    }

    // Replace footer copyright text
    $('footer p').each(function() {
      if ($(this).html().indexOf('&copy;') !== -1 || $(this).html().indexOf('©') !== -1) {
        $(this).html('&copy; 2026 Vijay Mahes &middot; developed by <a href="https://github.com/vijaymahes9080">Vijay Mahes</a>');
      }
    });

    // Page-specific setup
    if (page === 'index.html') {
      if (teacher) {
        window.location.href = 'teacher.html';
      }
    } 
    else if (page === 'teacher.html') {
      $('#teacher-name').text(teacher.name);
      
      var classes = getClasses().filter(function(c) { return c.teacher_id === teacher.teacher_id; });
      var wrapper = $('.wrapper');
      wrapper.empty();

      if (classes.length === 0) {
        wrapper.append('<h3 class="no-classes">You haven\'t added any classes yet!</h3>');
      } else {
        wrapper.append('<h3 class="no-classes">Click on a class to take attendance.</h3>');
        classes.forEach(function(c) {
          var totalDays = c.days || 0;
          var html = '<div class="class" style="position: relative;">' +
            '<button class="btn btn-danger delete-class-warning" data-toggle="modal" data-target=".delete-warning" data-code="'+c.code+'" data-year="'+c.year+'" data-section="'+c.section+'" style="position: absolute; right: 5px; top: 5px; z-index: 10;">&times;</button>' +
            '<a class="no-decoration" href="take.html?cN='+c.class_id+'">' +
            '<div><strong>Code</strong> : <span class="code">'+c.code+'</span></div>' +
            '<div><strong>Section</strong> : <span class="section">'+c.section+'</span></div>' +
            '<div><strong>Year</strong> : <span class="year">'+c.year+'</span></div>' +
            '<div><strong>Classes</strong> : '+totalDays+'</div>' +
            '</a></div>';
          wrapper.append(html);
        });
      }

      // Add Plus Button back
      wrapper.append(
        '<div class="class" data-toggle="modal" data-target=".bs-example-modal-lg" id="addClass" style="display: flex; align-items: center; justify-content: center; font-size: 2em; cursor: pointer;">' +
        '<span class="glyphicon glyphicon-plus"></span>' +
        '</div>'
      );

      // Re-bind click handlers for modal
      $('.delete-class-warning').click(function() {
        var code = $(this).data('code');
        var section = $(this).data('section');
        var year = $(this).data('year');
        $('.warning-class').html('<span class="warning-code">'+code+'</span> ( <span class="warning-section">'+section+'</span> ) , <span class="warning-year">'+year+'</span>');
      });
    } 
    else if (page === 'take.html') {
      var urlParams = new URLSearchParams(window.location.search);
      var classId = urlParams.get('cN');
      var classes = getClasses();
      var cls = classes.find(function(c) { return c.class_id === classId; });
      
      if (!cls) {
        $('body').html('<h1>Class not found</h1><h4><a href="teacher.html">Go to Dashboard</a></h4>');
        return;
      }

      // Set global variables defined in take.php inline scripts
      window.class_id = parseInt(cls.class_id);
      window.teacher_id = parseInt(teacher.teacher_id);
      window.numberOfDays = parseInt(cls.days) || 0;

      // Populate text
      $('#teacher-name').text(teacher.name);
      $('#class-code').text(cls.code);
      $('#class-section').text(cls.section);
      $('#class-year').text(cls.year);
      $('#classes-count').text(cls.days);

      // Render students list
      var recordsDiv = $('#studentRecords');
      recordsDiv.empty();

      var studentRolls = Object.keys(cls.records || {});
      if (studentRolls.length === 0) {
        recordsDiv.html('<h4>No students added yet for this class range.</h4>');
      } else {
        studentRolls.forEach(function(roll) {
          var details = cls.records[roll];
          var rollHyphen = roll.replace(/\//g, '-');
          var html = '<div class="student-record" style="margin-bottom: 10px; display: flex; align-items: center; justify-content: space-between;">' +
            '<span class="roll"><a href="student.html?roll='+rollHyphen+'&code='+cls.code+'&year='+cls.year+'&section='+cls.section+'">'+roll+'</a></span>: ' +
            '<span class="present" style="margin-left: 10px; font-weight: bold;">'+details.present+'</span>' +
            '<div style="margin-left: auto;">' +
            '<button class="marker btn" style="margin-right: 5px;">A</button>' +
            '<button class="btn btn-danger delete-roll" data-toggle="modal" data-target=".delete-warning" data-roll="'+roll+'">&times;</button>' +
            '</div></div>';
          recordsDiv.append(html);
        });
      }

      // Bind dynamic elements
      $('.marker').on('click',function() {
        markAsPresent($(this));
      });
      $('.delete-roll').on('click',function() {
        var rollStr = $(this).data('roll');
        $('.warning-roll').html(rollStr);
      });
      $(".roll").tooltip({title:'Click to see history',placement:'top'});
      $(".present").tooltip({title:'This is the number of days the student has attended',placement:'top'});
      $(".marker").tooltip({title:'Click to mark present/absent',placement:'top'});
      $(".delete-roll").tooltip({title:'Click to delete student',placement:'top'});
    } 
    else if (page === 'statistics.html') {
      var teacherClasses = getClasses().filter(function(c) { return c.teacher_id === teacher.teacher_id; });
      var dataObj = {};
      var detainedListDiv = $('#detained-list');
      detainedListDiv.empty();

      teacherClasses.forEach(function(c) {
        var key = c.code + ' ( ' + c.section + ' ) , ' + c.year;
        var totalDays = parseInt(c.days) || 0;
        
        var sum = 0;
        var count = 0;
        var detained = {};

        for (var roll in c.records) {
          var pres = parseInt(c.records[roll].present) || 0;
          sum += pres;
          count++;
          var pct = totalDays === 0 ? 0 : (pres / totalDays);
          if (pct < 0.5) {
            detained[roll] = Math.round(pct * 100);
          }
        }

        var average = count === 0 ? 0 : (sum / count);
        dataObj[key] = {
          total: totalDays,
          average: parseFloat(average.toFixed(1)),
          detained: detained
        };

        // Render detained lists in the DOM
        var detainedHtml = '<div class="classes" style="cursor: pointer; margin-bottom: 8px; font-size: 1.1em; background: #f9f9f9; padding: 10px; border-radius: 4px; border: 1px solid #ddd;">' +
          key + ' <span class="badge" style="background-color: #d9534f;">' + Object.keys(detained).length + '</span>' +
          '<div class="list" style="display: none; margin-top: 8px; padding-left: 20px;">';
        
        if (Object.keys(detained).length === 0) {
          detainedHtml += '<p class="text-muted">No students with short attendance.</p>';
        } else {
          for (var rollNo in detained) {
            detainedHtml += '<p>' + rollNo + ' ( ' + detained[rollNo] + ' % )</p>';
          }
        }
        detainedHtml += '</div></div>';
        detainedListDiv.append(detainedHtml);
      });

      // Expose globally so statistics.js can read it
      window.data = dataObj;

      // Re-bind classes click behavior for statistics
      $('.classes').click(function() {
        $('.classes').css('font-weight','');
        var list = $(this).find('.list');
        if(list.css('display') == 'block') {
          list.slideUp('fast');
        } else {
          $(this).css('font-weight','bold');
          $('.list').slideUp('fast');
          list.slideDown('fast');
        }      
      });
    } 
    else if (page === 'profile.html') {
      // Set input values
      $('input[name=name]').val(teacher.name);
      $('input[name=phone]').val(teacher.phone);
      $('input[name=email]').val(teacher.email);
      
      var teacherClasses = getClasses().filter(function(c) { return c.teacher_id === teacher.teacher_id; });
      $('#classes-count-profile').text(teacherClasses.length);
    }
  };

  // Run automatically on load
  $(document).ready(function() {
    window.initStaticPage();
  });
})();
