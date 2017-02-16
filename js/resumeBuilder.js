var model = {

	"bio" : {
		"name" : "Travis Gagnon",
		"role" : "Front End Web Developer",
		"contacts": {
			"mobile" : "218-556-8313",
			"email" : "traviswgagnon@gmail.com",
			"github" : "TravisWG",
			"githubURL": "https://github.com/TravisWG",
			"location" : "Fargo, North Dakota"
		},
		"welcomeMessage" : "Hello!  My name is Travis and I am an aspiring Front End Web Developer.",
		"skills" : ["HTML", "CSS", "JavaScript", "jQuery", "Responsive Web Design", "Version Control", "AJAX", "Website Optimization",],
		"biopic" : "images/profile.JPG",
		"imageAlt": "Personal headshot"
	},

	"education" : {
		"schools" : [{
			"name" : "Bemidji State University",
			"location" : "Bemidji, Minnesota",
			"degree" : "Bachelor of Science",
			"majors" : ["Psychology"],
			"dates" : "2004 - 2010",
			"url" : ""
			},
			{
			"name" : "North Dakota State University",
			"location" : "Fargo, North Dakota",
			"degree" : "Non-degree",
			"majors" : ["N/A"],
			"dates"	: "2013 - 2014",
			"url" : ""
			}
		],

		"onlineCourses" : [{
			"school" : "Udacity",
			"date" : "May 2015 - October 2015",
			"title" : "Intro to Programming Nanodegree",
			"url" : "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
			},
			{
			"school" : "Udacity",
			"date" : "February 2016 to December 2016",
			"title" : "Front End Web Development Nanodegree",
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
			},
			{
			"school" : "Udacity",
			"date" : "January 2016 to Current",
			"title" : "Full Stack Web Development Nanodegree",
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd004"
			}
		]
	},

	"projects" : {
		"projects" : [{
			"title" : "Responsive Web Design Project",
			"dates" : "March 2016",
			"description" : "Simple portfolio design that utilizes various responsive web design techniques such as CSS breakpoints (media queries), responsive patterns, CSS frameworks, and responsive images (srcset and sizes attributes).",
			"location" : "Udacity",
			"images" : ["images/responsive_page.JPG", "images/responsive_page_large.JPG"],
			"imageAlt": "Responsive Design Project Snapshot",
			"url": "projects/Responsive_Web_Design/index.html"
			},
			{
			"title" : "Intro to Programming Nanodegree Notes Webpage",
			"dates" : "May 2015 - October 2015",
			"description" : "Website built using skills learned during Intro to Programming Nanodegree. Content is primarily notes taken during the course. The site is hosted using Google App Engine and features use of HTML, CSS, (minor) JavaScript, and Python.",
			"location" : "Udacity",
			"images" : ["images/IPND_Page.JPG", "images/IPND_Page_Large.JPG"],
			"imageAlt": "Intro to Programming Note Webpage Snapshot",
			"url": "projects/INDP_Notes/index.html"
			}
		]
	},

	"work" : {
		"jobs" : [{
			"employer" : "Sanford Health",
			"title" : "CSPD Tech II",
			"location" : "Fargo, North Dakota",
			"dates" : "July 2014 to January 2017",
			"description" : "Processing and assembly of sterile instrumentation for use during surgical procedures."
			},
			{
			"employer" : "Prairie St John's Hospital",
			"title" : "Psychiatric Technician",
			"location" : "Fargo, North Dakota",
			"dates" : "February 2012 to May 2013",
			"description" : "Assisted nursing staff with patient care in an inpatient psychiatric facility."
			}
		]
	}
};

var controller = {
	init : function(){
		$("#overlay").hide();
		view.displayBio();
		view.displayEducation();
		view.displayWork();
		view.displayProjects();
		},

	getBioData : function() {
		return model.bio;
	},

	getEducationData : function() {
		return model.education;
	},

	getWorkData : function() {
		return model.work.jobs;
	},

	getProjectData : function() {
		return model.projects.projects
	}
};


var view = {
	displayBio : function() {
		var bioData = controller.getBioData();

		var formattedRole = HTMLheaderRole.replace("%data%", bioData.role);
		$("#header").prepend(formattedRole);

		var formattedName = HTMLheaderName.replace("%data%", bioData.name);
		$("#header").prepend(formattedName);

		var formattedEmail = HTMLemail.replace("%data%", bioData.contacts.email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);

		var formattedMobile = HTMLmobile.replace("%data%", bioData.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);

		var formattedGithub = HTMLgithub.replace("%data%", bioData.contacts.github);
		console.log(formattedGithub);
		formattedGithub = formattedGithub.replace("%link%", bioData.contacts.githubURL);
		console.log(formattedGithub);
		$("#topContacts").append(formattedGithub);

		var formattedLocation = HTMLlocation.replace("%data%", bioData.contacts.location);
		$("#topContacts").append(formattedLocation);

		$("#header").append("<hr>");

		var formattedbiopic = HTMLbioPic.replace("%data%", bioData.biopic).replace("%alt%", bioData.imageAlt);
		$("#header").append(formattedbiopic);

		var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bioData.welcomeMessage);
		$("#header").append(formattedWelcomeMessage);

		$("#header").append(HTMLskillsStart);
		if (bioData.skills.length != 0){
			for (i = 0; i < bioData.skills.length; i++) {
					$("#skills").append(HTMLskills.replace("%data%", bioData.skills[i]));
			};
		};
	},

	displayEducation : function() {
		var schoolData = controller.getEducationData().schools;
		for (i = 0; i < schoolData.length; i++) {
			$("#education").append(HTMLschoolStart);

			var formattedName = HTMLschoolName.replace("%data%", schoolData[i].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", schoolData[i].degree);
			$(".education-entry:last").append(formattedName.concat(formattedDegree));

			var formattedDates = HTMLschoolDates.replace("%data%", schoolData[i].dates);
			$(".education-entry:last").append(formattedDates);

			var formattedLocation = HTMLschoolLocation.replace("%data%", schoolData[i].location);
			$(".education-entry:last").append(formattedLocation);

			var formattedMajor = HTMLschoolMajor.replace("%data%", schoolData[i].majors);
			$(".education-entry:last").append(formattedMajor);
		};

		$("#education").append("<br>" + HTMLonlineClasses);

		var onlineCourseData = controller.getEducationData().onlineCourses;
		for (i = 0; i < onlineCourseData.length; i++) {
			$("#education").append(HTMLschoolStart);
			console.log(onlineCourseData)
			var formattedTitle = HTMLonlineTitle.replace("%data%", onlineCourseData[i].title).replace("%url%", onlineCourseData[i].url);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourseData[i].school);
			$(".education-entry:last").append(formattedTitle.concat(formattedOnlineSchool));

			var formattedCourseDate = HTMLonlineDates.replace("%data%", onlineCourseData[i].date);
			$(".education-entry:last").append(formattedCourseDate);
		};
	},



	displayWork : function(){
		var workData = controller.getWorkData();
		for(i = 0; i < workData.length; i++) {
			$("#workExperience").append(HTMLworkStart);
			console.log(workData)
			var formattedEmployer = HTMLworkEmployer.replace("%data%", workData[i].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", workData[i].title);
			$(".work-entry:last").append(formattedEmployer.concat(formattedTitle));

			var formattedDates = HTMLworkDates.replace("%data%", workData[i].dates);
			$(".work-entry:last").append(formattedDates);

			var formattedCity = HTMLworkLocation.replace("%data%", workData[i].location);
			$(".work-entry:last").append(formattedCity);

			var formattedDescription = HTMLworkDescription.replace("%data%", workData[i].description);
			$(".work-entry:last").append(formattedDescription);
		};
	},


	displayProjects : function() {
		$("#projects").append("<div class='project-container'></div>");

		var projectData = controller.getProjectData();
		for (i = 0; i < projectData.length; i++ ) {
			$(".project-container").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projectData[i].title);
			$(".project-entry:last").append(formattedTitle);
			$(".project-entry:last > a").attr("href", i);

			var formattedDates = HTMLprojectDates.replace("%data%", projectData[i].dates);
			$(".project-entry:last").append(formattedDates);

			if(projectData[i].images.length > 0) {
				var projectImage = HTMLprojectImage.replace("%data%", projectData[i].images[0]).replace("%alt%", projectData[i].imageAlt);
				$(".project-entry:last").append(projectImage);
			};
		};
	}
};


$(".project-entry > a[href!='#']").click(function(event){

	event.preventDefault();
	var index = $(this).attr("href");
	console.log(index)
	var projectData = controller.getProjectData();
	$("#overlay").append("<div class='popup-container'></div>");
	$(".popup-container").append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace("%data%", projectData[index].title);
	$(".project-entry:last").attr("class", "popup-entry");
	$(".popup-entry").append(formattedTitle);

	var formattedDates = HTMLprojectDates.replace("%data%", projectData[index].dates);
	$(".popup-entry").append(formattedDates);

	var formattedDescription = HTMLprojectDescription.replace("%data%", projectData[index].description);
	$(".popup-entry").append(formattedDescription);

	if(projectData[index].images.length > 0) {
			var projectImage = HTMLprojectImage.replace("%data%", projectData[index].images[1]).replace("%alt%", projectData[index].imageAlt);
			$(".popup-entry").append(projectImage);

	$("#overlay").show(200);
	}
});

$(document).ready(function() {
	$("#overlay").on("click", function() {
		$("#overlay").hide(200);
		$("#overlay").empty();
	});
});

function inName(){
	var nameArray = controller.getBioData().name.split(" ");
	var upperLastName = nameArray[1];
	upperLastName = upperLastName.toUpperCase();
	name = nameArray[0] + " " + upperLastName;
	return name;
}

var inNameButtonHTML = "<button onclick='inName()'>Internationalize Name</button>";
$("#main").append(inNameButtonHTML);

$("#mapDiv").append(googleMap);

controller.init();