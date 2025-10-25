import { User, Student, Course, Marks, FeeRecord } from '../types';

// Sample users for testing
export const SAMPLE_USERS: User[] = [
  { id: '1', email: 'admin@cmis.edu', role: 'admin', name: 'Admin User' },
  { id: '2', email: 'faculty1@cmis.edu', role: 'faculty', name: 'Dr. Sarah Johnson' },
  { id: '3', email: 'student1@cmis.edu', role: 'student', name: 'John Smith' },
  { id: '4', email: 'parent1@cmis.edu', role: 'parent', name: 'Robert Smith' },
];

// Sample credentials
export const SAMPLE_CREDENTIALS = {
  'admin@cmis.edu': 'Admin@123',
  'faculty1@cmis.edu': 'Faculty@1',
  'student1@cmis.edu': 'Student@1',
  'parent1@cmis.edu': 'Parent@1',
};

// Sample students
export const SAMPLE_STUDENTS: Student[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'student1@cmis.edu',
    department: 'Computer Science',
    semester: 6,
    rollNumber: 'CS2021001'
  },
  {
    id: '2',
    name: 'Emily Davis',
    email: 'emily.davis@cmis.edu',
    department: 'Computer Science',
    semester: 4,
    rollNumber: 'CS2022002'
  },
  {
    id: '3',
    name: 'Michael Brown',
    email: 'michael.brown@cmis.edu',
    department: 'Electronics',
    semester: 6,
    rollNumber: 'EC2021003'
  },
];

// Sample courses
export const SAMPLE_COURSES: Course[] = [
  {
    id: '1',
    code: 'CS301',
    name: 'Data Structures and Algorithms',
    credits: 4,
    semester: 3,
    department: 'Computer Science',
    faculty: 'Dr. Sarah Johnson'
  },
  {
    id: '2',
    code: 'CS401',
    name: 'Database Management Systems',
    credits: 3,
    semester: 4,
    department: 'Computer Science',
    faculty: 'Dr. Michael Wilson'
  },
  {
    id: '3',
    code: 'CS501',
    name: 'Machine Learning',
    credits: 4,
    semester: 5,
    department: 'Computer Science',
    faculty: 'Dr. Sarah Johnson'
  },
  {
    id: '4',
    code: 'EC301',
    name: 'Digital Electronics',
    credits: 3,
    semester: 3,
    department: 'Electronics',
    faculty: 'Dr. Anna Lee'
  },
];

// Sample marks
export const SAMPLE_MARKS: Marks[] = [
  {
    id: '1',
    studentId: '1',
    studentName: 'John Smith',
    courseId: '1',
    courseName: 'Data Structures and Algorithms',
    internalMarks: 18,
    endExamMarks: 72,
    totalMarks: 90,
    grade: 'A'
  },
  {
    id: '2',
    studentId: '1',
    studentName: 'John Smith',
    courseId: '2',
    courseName: 'Database Management Systems',
    internalMarks: 16,
    endExamMarks: 68,
    totalMarks: 84,
    grade: 'A'
  },
  {
    id: '3',
    studentId: '2',
    studentName: 'Emily Davis',
    courseId: '1',
    courseName: 'Data Structures and Algorithms',
    internalMarks: 19,
    endExamMarks: 76,
    totalMarks: 95,
    grade: 'A+'
  },
];

// Sample fee records
export const SAMPLE_FEES: FeeRecord[] = [
  {
    id: '1',
    studentId: '1',
    studentName: 'John Smith',
    semester: 6,
    totalAmount: 50000,
    paidAmount: 50000,
    dueAmount: 0,
    dueDate: '2024-06-30',
    status: 'paid',
    paymentHistory: [
      {
        id: '1',
        amount: 25000,
        date: '2024-01-15',
        method: 'Bank Transfer',
        transactionId: 'TXN001'
      },
      {
        id: '2',
        amount: 25000,
        date: '2024-06-15',
        method: 'Online Payment',
        transactionId: 'TXN002'
      }
    ]
  },
  {
    id: '2',
    studentId: '2',
    studentName: 'Emily Davis',
    semester: 4,
    totalAmount: 50000,
    paidAmount: 30000,
    dueAmount: 20000,
    dueDate: '2024-12-31',
    status: 'partial',
    paymentHistory: [
      {
        id: '3',
        amount: 30000,
        date: '2024-01-20',
        method: 'Cash',
        transactionId: 'TXN003'
      }
    ]
  },
];