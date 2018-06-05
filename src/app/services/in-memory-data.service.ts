import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  private today = new Date( Date.now() );
  private tomorrow = new Date();

  constructor() {
    this.tomorrow.setDate(this.today.getDate() + 1);
  }

  createDb() {
    const holds = [
      {
        id : 1,
        msg: 'Account Balance Past Due',
        path : '/account',
        external : false
      },
      {
        id : 2,
        msg : 'Advisor Meeting Required',
        path : '/advisors',
        external : false
      },
      {
        id : 3,
        msg : 'Missing Course Evaluations',
        path : '/schedule',
        external : false
      }
    ];

    const advisors = [
      {
        id : 1,
        fName : 'Jane',
        lName : 'Doe',
        department : 'Computer Science',
        position : 'Professor',
        email : 'doe.jane@nku.edu',
        office : 'Griffin Hall 452',
        phone : '859-572-5555',
        type : 'Major'
      },
      {
        id : 2,
        fName : 'John',
        lName : 'Doe',
        department : 'Political Science',
        position : 'Professor',
        email : 'doe.john@nku.edu',
        office : 'Landrum Academic Center 502',
        phone : '859-572-5555',
        type : 'Minor'
      }
    ];

    const latestGrades = [
      {
        id : 1,
        courseNumber : 'CSC 360',
        courseSection : '001',
        courseTitle : 'Object Oriented Programming I',
        grade : 'A-',
        attemptedHours : 3.0,
        earnedHours : 3.0,
        qualityHours : 3.0,
        qualityPoints : 12.0
      },
      {
        id : 2,
        courseNumber : 'MAT 358',
        courseSection : '001',
        courseTitle : 'Discrete Mathematics',
        grade : 'B',
        attemptedHours : 3.0,
        earnedHours : 3.0,
        qualityHours : 3.0,
        qualityPoints : 12.0
      },
      {
        id : 3,
        courseNumber : 'HIS 226',
        courseSection : '002',
        courseTitle : 'History of Western Europe',
        grade : 'A',
        attemptedHours : 3.0,
        earnedHours : 3.0,
        qualityHours : 3.0,
        qualityPoints : 12.0
      }
    ];

    const courseGrades = [
      {
        id : 1,
        number : 'CSC 360 - 001',
        name : 'Object Oriented Programming I',
        assignments : [
          {
            name : 'Assignment 1',
            description : 'Description of Assignment',
            type : 'assignment',
            grade : '12/12'
          },
          {
            name : 'Quiz 1',
            description : 'Description of Quiz',
            type : 'quiz',
            grade : '95%'
          },
          {
            name : 'Quiz 2',
            description : 'Description of Quiz',
            type : 'quiz',
            grade : 'Pending'
          }
        ]
      },
      {
        id : 2,
        number : 'MAT 258 - 001',
        name : 'Discrete Mathematics',
        assignments : [
          {
            name : 'Pop Quiz 1',
            description : 'Description of Quiz',
            type : 'quiz',
            grade : '8/10'
          },
          {
            name : 'Homework 1',
            description : 'Description of homework',
            type : 'assignment',
            grade : '92%'
          },
          {
            name : 'Pop Quiz 2',
            description : 'Description of Quiz',
            type : 'quiz',
            grade : 'Pending'
          }
        ]
      },
      {
        id : 3,
        number : 'HIS 226 - 002',
        name : 'History of Western Europe',
        assignments : [
          {
            name : 'Essay 1',
            description : 'Description of essay',
            type : 'assignment',
            grade : '88%'
          },
          {
            name : 'Exam Ch. 1-3',
            description : 'Description of exam',
            type : 'quiz',
            grade : '98%'
          },
          {
            name : 'Midterm Exam',
            description : 'Description of exam',
            type : 'quiz',
            grade : 'Pending'
          }
        ]
      }
    ];

    const gradeReport = [
      {
        id: 1,
        title : 'Current Term',
        attemptedHours : 12.0,
        earnedHours : 12.0,
        qualityHours : 12.0,
        qualityPoints : 48.0,
        gpa : 4.0
      },
      {
        id : 2,
        title : 'Cumulative',
        attemptedHours : 45.0,
        earnedHours : 45.0,
        qualityHours : 45.0,
        qualityPoints : 168.0,
        gpa : 3.74
      }
    ];

    const finalGrades = [
      {
        id : 1,
        courseNumber : 'CSC 360',
        courseSection : '001',
        courseTitle : 'Object Oriented Programming I',
        grade : 'A-',
        attemptedHours : 3.0,
        earnedHours : 3.0,
        qualityHours : 3.0,
        qualityPoints : 12.0
      },
      {
        id : 2,
        courseNumber : 'MAT 358',
        courseSection : '001',
        courseTitle : 'Discrete Mathematics',
        grade : 'B',
        attemptedHours : 3.0,
        earnedHours : 3.0,
        qualityHours : 3.0,
        qualityPoints : 12.0
      },
      {
        id : 3,
        courseNumber : 'HIS 226',
        courseSection : '002',
        courseTitle : 'History of Western Europe',
        grade : 'A',
        attemptedHours : 3.0,
        earnedHours : 3.0,
        qualityHours : 3.0,
        qualityPoints : 12.0
      }
    ];

    const midtermGrades = [
      {
        id : 1,
        courseNumber : 'CSC 360',
        courseSection : '001',
        courseTitle : 'Object Oriented Programming I',
        grade : 'B+',
        attemptedHours : 3.0,
        earnedHours : 3.0,
        qualityHours : 3.0,
        qualityPoints : 12.0
      },
      {
        id : 2,
        courseNumber : 'MAT 358',
        courseSection : '001',
        courseTitle : 'Discrete Mathematics',
        grade : 'C',
        attemptedHours : 3.0,
        earnedHours : 3.0,
        qualityHours : 3.0,
        qualityPoints : 12.0
      },
      {
        id : 3,
        courseNumber : 'HIS 226',
        courseSection : '002',
        courseTitle : 'History of Western Europe',
        grade : 'A-',
        attemptedHours : 3.0,
        earnedHours : 3.0,
        qualityHours : 3.0,
        qualityPoints : 12.0
      }
    ];

    const academicPlan = [
      {
        id : 1,
        semester : 'Fall 2018-2019',
        courses : [
          {
            number : 'CSC 361',
            title : 'Object Oriented Programming II',
            location : 'GH 330',
            days : [ 'Monday', 'Wednesday', 'Friday' ],
            day : '',
            startTime : '2:00 PM',
            endTime : '2:50 PM',
            instructor : 'Some instructor',
            icon : 'computer',
            credits : 3,
            status : 'Planned (Student)',
            section : '001'
          },
          {
            number : 'HIS 230',
            title : 'History of Eastern Europe',
            location : 'LAC 364',
            days : [ 'Tuesday', 'Thursday' ],
            day : '',
            startTime : '3:00 PM',
            endTime : '4:15 PM',
            instructor : 'Some instructor',
            icon : 'public',
            credits : 3,
            status : 'Planned (Student)',
            section : '001'
          },
          {
            number : 'CSC 364',
            title : 'Data Structures & Algorithms',
            location : 'GH 314',
            days : [ 'Tuesday', 'Thursday' ],
            day : '',
            startTime : '2:25 PM',
            endTime : '3:40 PM',
            instructor : 'Some instructor',
            icon : 'computer',
            credits : 3,
            status : 'Planned (Student)',
            section : '001'
          }
        ]
      },
      {
        id : 2,
        semester : 'Spring 2017-2018',
        courses : [
          {
            number : 'CSC 361',
            title : 'Object Oriented Programming II',
            location : 'GH 330',
            days : [ 'Monday', 'Wednesday', 'Friday' ],
            day : '',
            startTime : '1970-01-01T14:00:00.000Z',
            endTime : '1970-01-01T14:50:00.000Z',
            instructor : 'Some instructor',
            icon : 'computer',
            credits : 3,
            status : 'Planned (Student)',
            section : '001'
          },
          {
            number : 'HIS 230',
            title : 'History of Eastern Europe',
            location : 'LAC 364',
            days : [ 'Tuesday', 'Thursday' ],
            day : '',
            startTime : '1970-01-01T15:00:00.000Z',
            endTime : '1970-01-01T16:15:00.000Z',
            instructor : 'Some instructor',
            icon : 'public',
            credits : 3,
            status : 'Planned (Student)',
            section : '001'
          },
          {
            number : 'CSC 364',
            title : 'Data Structures & Algorithms',
            location : 'GH 314',
            days : [ 'Tuesday', 'Thursday' ],
            day : '',
            startTime : '1970-01-01T14:25:00.000Z',
            endTime : '1970-01-01T15:40:00.000Z',
            instructor : 'Some instructor',
            icon : 'computer',
            credits : 3,
            status : 'Planned (Student)',
            section : '001'
          }
        ]
      }
    ];

    const payers = [
      {
        id : 1,
        name : 'Nathan Norse',
        startDate : '01/01/2017',
        endDate : '12/31/2020',
        email : 'nathan@gmail.com',
        dateCreated : '01/01/2017',
        changedBy : 'Nicholas Norse'
      }
    ];

    const accounts = [
      {
        id : 1,
        nickname : 'My Checking',
        isRefund : true,
        holder : 'Nicholas Norse',
        routing : 483620868,
        bank : 'US Bank',
        number : 184734750
      },
      {
        id : 2,
        nickname : 'Parents\' Checking',
        isRefund : false,
        holder : 'Nellie Norse',
        routing : 648635294,
        bank : '5/3 Bank',
        number : 236184590
      }
    ];

    const classes = [
      {
        id : 1,
        number : 'CSC 360',
        title : 'Object Oriented Programming I',
        location : 'GH 334',
        days : [ 'Monday', 'Wednesday', 'Friday' ],
        day : '',
        startTime : new Date('1970-01-01 09:30'),
        endTime : new Date('1970-01-01 10:45'),
        instructor : 'Jane Doe',
        icon : 'computer'
      },
      {
        id : 2,
        number : 'MAT 358',
        title : 'Discrete Mathematics',
        location : 'MP 250',
        days : [ 'Monday', 'Wednesday', 'Friday' ],
        day : '',
        startTime : new Date('1970-01-01 13:00'),
        endTime : new Date('1970-01-01 14:15'),
        instructor : 'John Doe',
        icon : 'multiline_chart'
      },
      {
        id : 3,
        number : 'HIS 226',
        title : 'History of Western Europe',
        location : 'LAC 364',
        days : [ 'Tuesday', 'Thursday' ],
        day : '',
        startTime : new Date('1970-01-01 10:00'),
        endTime : new Date('1970-01-01 11:15'),
        instructor : 'John Q. Professor',
        icon : 'public'
      }
    ];

    const scheduleEvents = [
      {
        id : 1,
        start : new Date( this.today.setHours(16, 0) ),
        end : new Date( this.today.setHours(18, 0) ),
        title : 'CSC 360 - Object Oriented Programming I',
        color : {
          primary : 'black',
          secondary : '#fbc63c'
        },
        meta : {
          course : {
            number : 'CSC 360',
            title : 'Object Oriented Programming I',
            location : 'GH 334',
            days : ['Monday', 'Wednesday', 'Friday'],
            day : '',
            startTime : new Date('1970-01-01 09:30'),
            endTime : new Date('1970-01-01 10:45'),
            instructor : 'Jane Doe',
            icon : 'computer'
          }
        }
      },
      {
        id : 2,
        start : new Date( this.today.setHours(15, 0) ),
        end : new Date( this.today.setHours(15, 30) ),
        title : 'MAT 358 - Discrete Mathematics',
        color : {
          primary : 'black',
          secondary : '#FFC72C'
        },
        meta : {
          course : {
            number : 'MAT 358',
            title : 'Discrete Mathematics',
            location : 'MP 250',
            days : ['Monday', 'Wednesday', 'Friday'],
            day : '',
            startTime : new Date('1970-01-01 13:00'),
            endTime : new Date('1970-01-01 14:15'),
            instructor : 'John Doe',
            icon : 'multiline_chart'
          }
        }
      },
      {
        id : 3,
        start : new Date( this.today.setHours(10, 0) ),
        end : new Date( this.today.setHours(11, 0) ),
        title : 'HIS 226 - History of Western Europe',
        color : {
          primary : 'black',
          secondary : '#FFC72C'
        },
        meta : {
          course : {
            number : 'HIS 226',
            title : 'History of Western Europe',
            location : 'LAC 364',
            days : ['Tuesday', 'Thursday'],
            day : '',
            startTime : new Date('1970-01-01 10:00'),
            endTime : new Date('1970-01-01 11:15'),
            instructor : 'John Q. Professor',
            icon : 'public'
          }
        }
      },
      {
        id : 4,
        start : new Date( this.today.setHours(13, 30) ),
        end : new Date( this.today.setHours(14, 0) ),
        title : 'CSC 360 - Object Oriented Programming I',
        color : {
          primary : 'black',
          secondary : '#FFC72C'
        },
        meta : {
          course : {
            number : 'CSC 360',
            title : 'Object Oriented Programming I',
            location : 'GH 334',
            days : ['Monday', 'Wednesday', 'Friday'],
            day : '',
            startTime : new Date('1970-01-01 09:30'),
            endTime : new Date('1970-01-01 10:45'),
            instructor : 'Jane Doe',
            icon : 'computer'
          }
        }
      },
      {
        id : 5,
        start : new Date(this.tomorrow.setHours(12, 0)),
        end : new Date(this.tomorrow.setHours(14, 0)),
        title : 'MAT 358 - Discrete Mathematics',
        color : {
          primary : 'black',
          secondary : '#FFC72C'
        },
        meta : {
          course : {
            number : 'MAT 358',
            title : 'Discrete Mathematics',
            location : 'MP 250',
            days : ['Monday', 'Wednesday', 'Friday'],
            day : '',
            startTime : new Date('1970-01-01 13:00'),
            endTime : new Date('1970-01-01 14:15'),
            instructor : 'John Doe',
            icon : 'multiline_chart'
          }
        }
      }
    ];

    const norseFeedItems = [
      {
        'msg': 'New grade added for CSC 360',
        'feature': 'Grades',
        'path' : '../grades',
        'icon' : 'assessment',
        'iconColor' : 'text-warning',
        'timestamp' : new Date ('2018-01-11T16:00:00')
      },
      {
        'msg': 'Hold added to your account!',
        'feature': 'Holds',
        'path' : '',
        'icon' : 'warning',
        'iconColor' : 'text-danger',
        'timestamp' : new Date ('2018-01-12T16:00:00')
      },
      {
        'msg': 'New grade added for CSC 240',
        'feature': 'Grades',
        'path' : '../grades',
        'icon' : 'assessment',
        'iconColor' : 'text-warning',
        'timestamp' : new Date ('2018-01-10T16:00:00')
      },
      {
        'msg': 'Registration window now open!',
        'feature': 'Registration',
        'path' : '../registration',
        'icon' : 'date_range',
        'iconColor' : 'text-success',
        'timestamp' : new Date ('2018-01-09T16:00:00')
      },
      {
        'msg': 'Overall GPA just increased to 3.37!',
        'feature': 'Grades',
        'path' : '../grades',
        'icon' : 'track_changes',
        'iconColor' : 'text-success',
        'timestamp' : new Date ('2018-01-21T16:00:00')
      },
      {
        'msg': 'Tuition bill is due this week',
        'feature': 'Account',
        'path' : '../account',
        'icon' : 'local_atm',
        'iconColor' : 'text-danger',
        'timestamp' : new Date ('2018-01-19T16:00:00')
      },
      {
        'msg': 'Advisor information updated',
        'feature': 'Advisors',
        'path' : '../advisors',
        'icon' : 'assignment_ind',
        'iconColor' : 'text-warning',
        'timestamp' : new Date ('2018-01-16T16:00:00')
      }
    ];

    return { holds, advisors, latestGrades, courseGrades, gradeReport, finalGrades, midtermGrades, academicPlan, payers, accounts, classes,
      scheduleEvents, norseFeedItems };
  }
}
