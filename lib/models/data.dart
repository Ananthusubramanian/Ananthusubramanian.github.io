import 'models.dart';

class Data {
  List<Information> educations = [
    Information(
        startTime: "2017 -",
        endTime: "Present",
        title: "Amrita Vishwa Vidyapeedam, B.Tech",
        text:
            "In the fall of 2017 I started my bachelor's degree in Software Engineering."),
    Information(
        startTime: "2015 -",
        endTime: "2017",
        title:
            "Chinmaya Vidyalaya , Kottayam",
        text:
            "Completed Higher Secondary Education"),
  ];
  List<Information> work = [
    Information(
        startTime: "5/2019 -",
        endTime: "8/2019",
        title: "Golang Dev",
        text:
            "At Ixxo.io "),
  ];

  List<Information> projects = [
    Information(
        startTime: "2019",
        endTime: "",
        title: "Flutter web install guide",
        text:
            "I made guide on how to install Flutter web on Windows.",
        imageUrl: "flutterwebinstall.PNG"),
  ];
  List<Information> contacts = [
    Information(
        startTime: "",
        endTime: "",
        title: "Contact Information",
        text:
            "M S Ananthu Subramanian\n\nanandusubramanian@gmail.com"),
  ];
}
