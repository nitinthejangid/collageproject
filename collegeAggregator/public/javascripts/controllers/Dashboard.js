var app = angular.module( "College-WebApp",[ "ngAnimate", "nvd3", "ngCookies", "angularUtils.directives.dirPagination", "ngRoute" ] );

app.controller( "dashboardController", function( $scope, $http, $location, $route ) {
    $scope.csvresult = []
    $scope.csvresult2 = [];
    $scope.widgetCharts = [];

    $scope.tech = [];
    $scope.lang = [];
    $scope.dummy = [];
    $scope.myWelcome = [];
    $scope.dropdownJson = {};
    $scope.dropdownParse = {};
    $scope.dropdownObj = {};
    $scope.dropdownJsonString = {};

    $scope.tag = true;
    $scope.xaxis = ["AcademicYears", "Semesters", "Courses", "Subjects"];

    $scope.tag1 = false;
    $scope.tag2 = false;
    $scope.tag3 = false;
    $scope.tag4 = false;
    /* $scope.func = function(){


     if( $scope.form.xaxis == "academicYears" ){

     $scope.tag1 = true;
     $scope.tag2 = false;
     $scope.tag3 = false;
     $scope.tag4 = false;

     $scope.allAcademicYears = [ "ChooseAllYears", "2015-2016", "2016-2017", "2017-2018" ];

     $scope.getAllCoursesAvg = function ( form ) {
     $scope.allCoursesAvg = [ "AllCoursesAggrigation", "CSE", "ECE", "EEE" ];
     }
     $scope.getAllSemesterAvg = function ( form ) {
     $scope.allSemesters = [ "AllSemestersavg ", "SEMESTER1", "SEMESTER2", "SEMESTER3", "SEMESTER4", "SEMESTER5", "SEMESTER6", "SEMESTER7", "SEMESTER8" ];
     }
     $scope.getAllSubjectAvg = function ( form ) {
     $scope.allSubjectAvg = [ "AllSubjects", "Subject1", "Subject2", "Subject3", "Subject4", "Subject5", "Subject6", "Lab1", "Lab2", "Lab3" ];
     }
     } else if ( $scope.form.xaxis == "Semesters" ) {
     $scope.tag2 = true;
     $scope.tag1 = false;
     $scope.tag3 = false;
     $scope.tag4 = false;

     $scope.allSemesters = [ "AllSemestersavg ", "SEMESTER1", "SEMESTER2", "SEMESTER3", "SEMESTER4", "SEMESTER5", "SEMESTER6", "SEMESTER7", "SEMESTER8" ];

     $scope.getallAcademicYears = function ( form ) {
     $scope.allAcademicYears = [ "ChooseAllYears", "2015-2016", "2016-2017", "2017-2018" ];
     }
     $scope.getAllCoursesAvg = function ( form ) {
     $scope.allCoursesAvg = [ "AllCoursesAggrigation", "CSE", "ECE", "EEE" ];
     }
     $scope.getAllSubjectAvg = function ( form ) {
     $scope.allSubjectAvg = [ "AllSubjects", "Subject1", "Subject2", "Subject3", "Subject4", "Subject5", "Subject6", "Lab1", "Lab2", "Lab3" ];
     }


     } else if ( $scope.form.xaxis == "Courses" ) {
     $scope.tag3 = true;
     $scope.tag1 = false;
     $scope.tag2 = false;
     $scope.tag4 = false;

     $scope.allCoursesAvg = [ "AllCoursesAggrigation", "CSE", "ECE", "EEE" ];

     $scope.getallAcademicYears = function ( form ) {
     $scope.allAcademicYears = [ "ChooseAllYears", "2015-2016", "2016-2017", "2017-2018" ];
     }
     $scope.getAllSemesterAvg = function ( form ) {
     $scope.allSemesters = [ "AllSemestersavg ", "SEMESTER1", "SEMESTER2", "SEMESTER3", "SEMESTER4", "SEMESTER5", "SEMESTER6", "SEMESTER7", "SEMESTER8" ];
     }
     $scope.getAllSubjectAvg = function ( form ) {
     $scope.allSubjectAvg = [ "AllSubjects", "Subject1", "Subject2", "Subject3", "Subject4", "Subject5", "Subject6", "Lab1", "Lab2", "Lab3" ];
     }


     }
     else if ( $scope.form.xaxis == "Subjects" ) {
     $scope.tag4 = true;
     $scope.tag1 = false;
     $scope.tag2 = false;
     $scope.tag3 = false;


     $scope.allSubjectAvg = [ "AllSubjects", "Subject1", "Subject2", "Subject3", "Subject4", "Subject5", "Subject6", "Lab1", "Lab2", "Lab3" ];

     $scope.getAllSemesterAvg = function ( form ) {
     $scope.allSemesters = [ "AllSemestersavg ", "SEMESTER1", "SEMESTER2", "SEMESTER3", "SEMESTER4", "SEMESTER5", "SEMESTER6", "SEMESTER7", "SEMESTER8" ];
     }
     $scope.getallAcademicYears = function ( form ) {
     $scope.allAcademicYears = [ "ChooseAllYears", "2015-2016", "2016-2017", "2017-2018" ];
     }
     $scope.getAllCoursesAvg = function ( form ) {
     $scope.allCoursesAvg = [ "AllCoursesAggrigation", "CSE", "ECE", "EEE" ];
     }

     }


     }
     */


    $scope.yaxis = ["Number of Students in the perticular year", "Overall Average Marks parcentage on all years", "Overall pass percentage", "Overall fail percentage"];

    $scope.chart = ["AreaChart", "PieChart", "LineChart","BarChart"];
    $scope.user = ["user"];
    $scope.typeofadmin = [];
    $scope.button = [];
    $scope.signup = [];
    $scope.buttonshow = true;
    $scope.para = true;
    $scope.onloadtable = true;
    $scope.organ = true;
    $scope.orgTable = false;
    $scope.editTable = false;
    $scope.courseShow = false;
    $scope.impbtn = true;
    $scope.techtables = true;
    $scope.memberTable = false;
    $scope.blockshow = true;
    $scope.unblockshow = true;
    $scope.widGraph = false;
    $scope.studenttable = false;
    $scope.Student = false;
    $scope.importbtn = false;
    $scope.orgCourses = [];

    $scope.widgetflag = false;
    $scope.studentshow = false
    $scope.organId = "";
    $scope.welcome = true;
    $scope.sample = false;
    $scope.import = false;
    $scope.flag = 0;
    $scope.danger = false;
    $scope.widstyle = "float: right; margin-top: -4%;margin-right: 17%;";


    $scope.form = {};
    $scope.visible = false;
    $scope.limit = 2;

    $scope.dataBRAssetLine = [];
    $scope.dataBRAssetBar = [];
    $scope.dataPieChartBR = [];
    $scope.dataBRAsset = [];

    $scope.linewidget = [];
    $scope.areawidget = [];
    $scope.piewidget = [];
    $scope.barwidget= [];
    $scope.graphArray = [];
    $scope.flagg = false;
    $scope.flagg1 = true;

    /*var values = {};
     values.academicYears = [ 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011 ];
     values.semesters = [ 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2121 ];
     values.courses = [ 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2111 ];
     values.subjects = [ 3101, 3102, 3103, 3104, 3105, 3106, 3107, 3108, 3109, 3110, 3111 ];
     //values.piex = [ "2001", "2002", "2003", "2004", "2005", "2006" ];

     var values1 = {};
     values1.academicYears1 = [ 20, 30, 100, 70, 50, 28, 89, 45, 56, 59, 29 ];
     values1.semesters1 = [ 22, 17, 89, 34, 25, 78, 12, 100, 54, 64, 77 ];
     values1.courses1 = [ 20, 30, 10, 70, 50, 28, 80, 45, 56, 59, 100 ];
     values1.subjects1 = [ 15, 35, 70, 90, 50, 28, 80, 45, 56, 79, 10 ];*/
    // values1.piey = [ 10, 30, 50, 40, 70, 25 ];

    var values = {};
    values.academicYears = [];
    values.semesters = [];
    values.courses = [];
    values.subjects = [];


    var values1 = {};
    values1.academicYears1 = [];
    values1.semesters1 = [];
    values1.courses1 = [];
    values1.subjects1 = [];

    $scope.a = "";
    $scope.b = "";

    $scope.widgetGraph = function (widgetUrl, successUrl) {

        if ($scope.form.widget == undefined || $scope.form.widget == "") {
            $("#widget").modal("show");
            $scope.widgetflag = true;
            $scope.widgetnameError = "Please enter Widget Name!";
            alert("in if")

        }
        else {

            alert("in else")
            //alert("$scope.form.allSubjectAvg" +$scope.form.allAcademicYears);
            $scope.WidgetName = $scope.form.widget
            $scope.xaxis = $scope.form.xaxis;
            $scope.academicYear = [];
            if (Array.isArray(JSON.parse($scope.form.allAcademicYears))) {
                //alert("in if")
                $scope.academicYear = JSON.parse($scope.form.allAcademicYears);
            }
            else {
                //alert("in else")
                $scope.academicYear.push(JSON.parse($scope.form.allAcademicYears));
            }
            //alert("$scope.academicYear: " + $scope.academicYear)
            $scope.course_name = [];
            if (Array.isArray(JSON.parse($scope.form.allCoursesAvg))) {
                //alert("in if")
                $scope.course_name = JSON.parse($scope.form.allCoursesAvg);
            }
            else {
                //alert("in else")
                $scope.course_name.push(JSON.parse($scope.form.allCoursesAvg));
            }
            //alert("$scope.course_name: " + $scope.course_name)
            $scope.semester = [];
            if (Array.isArray(JSON.parse($scope.form.allSemesters))) {
                //alert("in if")
                $scope.semester = JSON.parse($scope.form.allSemesters);
            }
            else {
                //alert("in else")
                $scope.semester.push(JSON.parse($scope.form.allSemesters));
            }
            // alert("$scope.semester: " + $scope.course_name)

            $scope.subject = [];

            //alert("Array or not: "+Array.isArray(JSON.parse($scope.form.allSubjectAvg)));

            if (Array.isArray(JSON.parse($scope.form.allSubjectAvg))) {
                //alert("in if")
                $scope.subject = JSON.parse($scope.form.allSubjectAvg);
            }
            else {
                //alert("in else")
                $scope.subject.push(JSON.parse($scope.form.allSubjectAvg));
            }
            //alert("$scope.subject: " + $scope.subject)
            //$scope.subject.push($scope.form.allSubjectAvg);
            $scope.yaxis = $scope.form.yaxis;
            // $scope.chart = $scope.form.chart;
            //alert ("course_name" + JSON.stringify($scope.course_name))
            //alert($scope.chart)
            //alert($scope.organisation)
            if ($scope.form.xaxis == "AcademicYears") {
                $scope.a = "academicYears";
            } else if ($scope.form.xaxis == "Semesters") {
                $scope.a = "semesters";
            } else if ($scope.form.xaxis == "Courses") {
                //alert("hi");
                $scope.a = "courses";
            } else if ($scope.form.xaxis == "Subjects") {
                $scope.a = "subjects";
            } else {
                console.log("no data");
            }
            console.log("a: " + $scope.a);

            //  $scope.yaxis = [ "Number of Students in the perticular year", "Overall Average Marks parcentage on all years", "Overall pass percentage", "Overall fail percentage" ];
            //console.log($scope.form.yaxis);
            if ($scope.form.yaxis == "Number of Students in the perticular year") {
                console.log("yes")
                $scope.b = "academicYears1";
            } else if ($scope.form.yaxis == "Overall Average Marks parcentage on all years") {
                $scope.b = "semesters1";
            } else if ($scope.form.yaxis == "Overall pass percentage") {
                $scope.b = "courses1";
                // alert("hello");
            } else if ($scope.form.yaxis == "Overall fail percentage") {
                $scope.b = "subjects1";
            } else {
                console.log("no data");
            }
            console.log("b: " + $scope.b);


            $scope.data = {
                "org_name": $scope.organisation,
                "widgetName": $scope.WidgetName,
                "xaxis": $scope.xaxis,
                "course_name": $scope.course_name,
                "academicYear": $scope.academicYear,
                "semester": $scope.semester,
                "subject": $scope.subject,
                "yaxis": $scope.yaxis,
                "chartType": $scope.form.chart
            }


            //  alert("Payload: " + JSON.stringify($scope.data));

            $http({
                method: 'POST',
                url: '/yaxis1',
                data: $scope.data,
                headers: {'Content-Type': 'application/json'}
            }).then(function mySucces(response) {
                //     alert("Ajax call success!");
                $scope.myWelcome = response.data;
                //$scope.myWelcome1 = JSON.parse(response.data)
                $scope.myWelcome1 = JSON.stringify(response.data)
                $scope.statusValue = $scope.myWelcome.status
                console.log("status: " + JSON.stringify($scope.statusValue))
                //alert(JSON.stringify($scope.statusValue[0]))
                //alert(JSON.stringify($scope.statusValue[0].a))
                //alert($scope.statusValue.length)
                for (i = 0; i < $scope.statusValue.length; i++) {
                    //alert("a: "+$scope.statusValue[i].a +" b: "+$scope.statusValue[i].b)
                    values.academicYears.push($scope.statusValue[i].a)
                    values.semesters.push($scope.statusValue[i].a)
                    values.courses.push($scope.statusValue[i].a)
                    values.subjects.push($scope.statusValue[i].a)

                    values1.academicYears1.push($scope.statusValue[i].b)
                    values1.semesters1.push($scope.statusValue[i].b)
                    values1.courses1.push($scope.statusValue[i].b)
                    values1.subjects1.push($scope.statusValue[i].b)

                }
                //alert("xaxis: "+values.academicYears+" yaxis: "+values1.academicYears1)
                /*var values = {};
                 values.academicYears = [ $scope.myWelcome.subject ];
                 values.semesters = [ $scope.myWelcome.subject ];
                 values.courses = [ $scope.myWelcome.subject ];
                 values.subjects = [ $scope.myWelcome.subject ];
                 //values.piex = [ "2001", "2002", "2003", "2004", "2005", "2006" ];

                 var values1 = {};
                 values1.academicYears1 = [ $scope.count ];
                 values1.semesters1 = [ 22   , 17, 89, 34, 25, 78, 12, 100, 54, 64, 77 ];
                 values1.courses1 = [ 20, 30, 10, 70, 50, 28, 80, 45, 56, 59, 100 ];
                 values1.subjects1 = [ 15, 35, 70, 90, 50, 28, 80, 45, 56, 79, 10 ];*/

                //calling widget function
                $scope.graph();

                //Saving the graph (calling save widget API)
                $scope.data = {
                    "orgId": $scope.organId,
                    "org_name": $scope.organisation,
                    "course_name": $scope.course_name,
                    "academicYear": $scope.academicYear,
                    "semester": $scope.semester,
                    "subject": $scope.subject,
                    "xaxis": $scope.xaxis,
                    "yaxis": $scope.yaxis,
                    "chartType": $scope.form.chart,
                    "WidgetName": $scope.form.widget,
                };

                console.log($scope.data);
                $http({
                    method: 'POST',
                    url: '/widget',
                    data: $scope.data,
                    headers: {'Content-Type': 'application/json'}
                }).then(function mySucces(response) {
                    //alert("Got Response!");
                    $scope.myWelcome = {};
                    $scope.myWelcome = response.data;
                    console.log(response.data);
                    //alert("data" + JSON.stringify($scope.myWelcome))
                    //alert($scope.myWelcome.status)
                    //alert($scope.myWelcome[0].status)
                    //alert($scope.myWelcome[0].sessionid)
                    if ($scope.myWelcome.status == "success") {
                        //alert("saved done")

                    }
                    else {
                        //alert("not saved");

                    }

                }, function myError(response) {
                    //alert("Erorr");
                    $scope.myWelcome = response.statusText;
                    //alert($scope.myWelcome);
                });
            }, function myError(response) {
                //alert("Erorr");
                $scope.myWelcome = response.statusText;
                //alert($scope.myWelcome);
            });

            values.academicYears = [];
            values.semesters = [];
            values.courses = [];
            values.subjects = [];


            values1.academicYears1 = [];
            values1.semesters1 = [];
            values1.courses1 = [];
            values1.subjects1 = [];
        }
    };

    $scope.onloadWidgetGraph = function () {
        //ploting graph in onload dashboard from fetchAPI
        //alert("welcome in onloadWidgetGraph");
        var count = -1;
        var i = 0;

        for (i = 0; i < $scope.myWelcome.charts.length;i++) {
            //alert(JSON.stringify($scope.myWelcome.charts[i]))
            //alert($scope.myWelcome.charts[i].chartType)
            //alert($scope.myWelcome.charts[i].subject)


            $scope.data = {
                "org_name": $scope.organisation,
                "widgetName": $scope.myWelcome.charts[i].WidgetName,
                "xaxis": $scope.myWelcome.charts[i].xaxis,
                "course_name": $scope.myWelcome.charts[i].course_name,
                "academicYear": $scope.myWelcome.charts[i].academicYear,
                "semester": $scope.myWelcome.charts[i].semester,
                "subject": $scope.myWelcome.charts[i].subject,
                "yaxis": $scope.myWelcome.charts[i].yaxis,
                "chartType": $scope.myWelcome.charts[i].chartType
            }
            //sleep(3000);
            //alert("data: " + JSON.stringify($scope.data))
            console.log("Payload: " + JSON.stringify($scope.data));

            $http({
                method: 'POST',
                url: '/yaxis1',
                data: $scope.data,
                headers: {'Content-Type': 'application/json'}
            }).then(function mySucces(response) {
              //  alert("Ajax call success!"+JSON.stringify(response.data));
                //alert("i:"+i)
                var p= ++count;

                $scope.form.chart=$scope.myWelcome.charts[p].chartType;
                $scope.form.yaxis=$scope.myWelcome.charts[p].yaxis;
                $scope.form.xaxis=$scope.myWelcome.charts[p].xaxis;
                $scope.form.widget=$scope.myWelcome.charts[p].WidgetName;
                if ($scope.form.xaxis == "AcademicYears") {
                    $scope.a = "academicYears";
                } else if ($scope.form.xaxis == "Semesters") {
                    $scope.a = "semesters";
                } else if ($scope.form.xaxis == "Courses") {
                    //alert("hi");
                    $scope.a = "courses";
                } else if ($scope.form.xaxis == "Subjects") {
                    $scope.a = "subjects";
                } else {
                    console.log("no data");
                }


                //  $scope.yaxis = [ "Number of Students in the perticular year", "Overall Average Marks parcentage on all years", "Overall pass percentage", "Overall fail percentage" ];
                //console.log($scope.form.yaxis);
                if ($scope.form.yaxis == "Number of Students in the perticular year") {
                    console.log("yes")
                    $scope.b = "academicYears1";
                } else if ($scope.form.yaxis == "Overall Average Marks parcentage on all years") {
                    $scope.b = "semesters1";
                } else if ($scope.form.yaxis == "Overall pass percentage") {
                    $scope.b = "courses1";
                    // alert("hello");
                } else if ($scope.form.yaxis == "Overall fail percentage") {
                    $scope.b = "subjects1";
                } else {
                    console.log("no data");
                }

                 values = {};
                values["academicYears"]=[];
                values["semesters"]=[];
                values["courses"]=[];
                values["subjects"]=[];
                 values1 = {};
                values1["academicYears1"]=[];
                values1["semesters1"]=[];
                values1["courses1"]=[];
                values1["subjects1"]=[];
                //alert($scope.form.yaxis)
                $scope.responseYaxisValue=[];
                $scope.responseYaxisValue = response.data.status;
                //alert("status: " + JSON.stringify($scope.responseYaxisValue))
                //alert(JSON.stringify($scope.responseYaxisValue[0]))
                //alert(JSON.stringify($scope.responseYaxisValue[0].a))
                for (var j = 0; j < $scope.responseYaxisValue.length; j++) {
                    //alert("a: "+$scope.responseYaxisValue[j].a +" b: "+$scope.responseYaxisValue[j].b)
                    values.academicYears.push($scope.responseYaxisValue[j].a)
                    values.semesters.push($scope.responseYaxisValue[j].a)
                    values.courses.push($scope.responseYaxisValue[j].a)
                    values.subjects.push($scope.responseYaxisValue[j].a)

                    values1.academicYears1.push($scope.responseYaxisValue[j].b)
                    values1.semesters1.push($scope.responseYaxisValue[j].b)
                    values1.courses1.push($scope.responseYaxisValue[j].b)
                    values1.subjects1.push($scope.responseYaxisValue[j].b)
                    //alert("xaxis: "+values.academicYears+" yaxis: "+values1.academicYears1)

                }
            $scope.graph();

            }, function myError(response) {
                //alert("Erorr");
                $scope.myWelcome = response.statusText;
                //alert($scope.myWelcome);
            });

        }

    };


    $scope.graphOnload = function () {
        //alert("hiii graphOnload");
        //  $scope.onloadtable = true;
        $scope.impbtn = false;
        $scope.widGraph = true;
        $scope.para = false;

        console.log($scope.form.xaxis);


        //var values = []
        $scope.areaChartData = [];
        $scope.piearray = [];
        $scope.subjects = [];
        console.log("why a: " + $scope.a);
        console.log("why b: " + $scope.b);
        var a = $scope.a;
        var b = $scope.b;
        //alert( $scope.myWelcome.subject )
        /*values.academicYears = [ $scope.myWelcome.subject ];
         values.semesters = [ $scope.myWelcome.subject ];
         values.courses = [ $scope.myWelcome.subject ];

         //values.piex = [ "2001", "2002", "2003", "2004", "2005", "2006" ];
         values1.academicYears1 = [ $scope.count ];
         values1.semesters1 = [ $scope.count ];
         values1.courses1 = [ $scope.count ];
         console.log("values[a]:" + values[a]);
         console.log("values1[b]:" + values1[b]);*/
        console.log("a" + values[a]);
        for (var i = 0; i < values[a].length; i++) {


            $scope.subjects[i] = {
                "x": values[a][i],
                "y": values1[b][i]
            }
            $scope.piearray[i] = {
                "key": values[a][i],
                "y": values1[b][i]
            }

            $scope.areaChartData.push(new Array(values[a][i], values1[b][i]));


        }
        // alert(JSON.stringify($scope.areaChartData ));
        console.log("$scope.areaChartData: " + $scope.areaChartData);
        console.log("$scope.subjects: " + $scope.subjects);
        $scope.subjectdata = $scope.subjects;
        if ($scope.form.chart == "AreaChart") {

            //$scope.areawidget.push($scope.form.widget);
            $scope.areacount = $scope.areacount + 1;
            $scope.areashow = true;
            if ($scope.linecount < 0) {
                $scope.lineshow = false;
            } else {
                $scope.lineshow = true;
            }

            if ($scope.piecount < 0) {
                $scope.pieshow = false;
            } else {
                $scope.pieshow = true;
            }
            $scope.areawidget[$scope.areacount] = $scope.form.widget;

            $scope.optionsarea = {
                chart: {
                    showControls: false,
                    type: "stackedAreaChart",
                    height: 430,
                    margin: {
                        top: 20,
                        right: 20,
                        bottom: 30,
                        left: 40
                    },
                    x: function (d) {
                        return d[0];
                    },
                    y: function (d) {
                        return d[1];
                    },

                    useVoronoi: false,
                    clipEdge: true,
                    duration: 100,
                    useInteractiveGuideline: true,
                    xAxis: {
                        showMaxMin: false,
                        tickFormat: function (d) {
                            return d3.format(",.2f")(d);
                        }
                    },
                    yAxis: {
                        tickFormat: function (d) {
                            return d3.format(",.2f")(d);
                        }
                    },
                    zoom: {
                        enabled: true,
                        scaleExtent: [1, 10],
                        useFixedDomain: false,
                        useNiceScale: false,
                        horizontalOff: false,
                        verticalOff: true,
                        unzoomEventType: "dblclick.zoom"
                    }
                }
            };


            var keyLabel1 = $scope.form.xaxis + " Vs " + $scope.form.yaxis;
            console.log("$scope.areaChartData" + $scope.areaChartData);

            $scope.dataBRAsset[$scope.areacount] = [];
            if ($scope.form.xaxis == "AcademicYears") {
                $scope.dataBRAsset[$scope.areacount].push({
                    "key": keyLabel1,
                    "values": $scope.areaChartData,
                    "color": "rgb( 6, 140, 53 )"
                });
            } else if ($scope.form.xaxis == "Semesters") {
                $scope.dataBRAsset[$scope.areacount].push({
                    "key": keyLabel1,
                    "values": $scope.areaChartData,
                    "color": "rgb( 241, 102, 35)"
                });
            } else if ($scope.form.xaxis == "Courses") {
                $scope.dataBRAsset[$scope.areacount].push({
                    "key": keyLabel1,
                    "values": $scope.areaChartData,
                    "color": "rgb(31, 119, 180)"
                });
            } else if ($scope.form.xaxis == "Subjects") {
                $scope.dataBRAsset[$scope.areacount].push({
                    "key": keyLabel1,
                    "values": $scope.areaChartData,
                    "color": "rgb(255,165,0)"
                });
            }

            $scope.graphArray.push({
                wid: $scope.areawidget[$scope.areacount],
                type: 'AreaChart',
                options: $scope.optionsarea,
                data: $scope.dataBRAsset[$scope.areacount]
            });
            console.log($scope.graphArray);
        }
        if ($scope.form.chart == "LineChart") {

            //$scope.linewidget.push($scope.form.widget);
            $scope.linecount = $scope.linecount + 1;
            $scope.lineshow = true;
            if ($scope.areacount < 0) {
                $scope.areashow = false;
            } else {
                $scope.areashow = true;
            }

            if ($scope.piecount < 0) {
                $scope.pieshow = false;
            } else {
                $scope.pieshow = true;
            }

            $scope.getLineChartCount = function (lc) {

                return new Array(lc);
            }
            $scope.linewidget[$scope.linecount] = $scope.form.widget;


            $scope.line = {
                chart: {
                    zoom: {},
                    type: 'lineChart',
                    height: 420,
                    margin: {
                        top: 20,
                        right: 20,
                        bottom: 40,
                        left: 55
                    },
                    x: function (d) {
                        return d.x;
                    },
                    y: function (d) {
                        return d.y;
                    },
                    useInteractiveGuideline: true,
                    dispatch: {

                        stateChange: function (e) {
                            console.log("stateChange");
                        },
                        changeState: function (e) {
                            console.log("changeState");
                        },
                        tooltipShow: function (e) {
                            console.log("tooltipShow");
                        },
                        tooltipHide: function (e) {
                            console.log("tooltipHide");
                        }
                    },
                    xAxis: {
                        axisLabel: $scope.form.xaxis
                    },
                    yAxis: {
                        axisLabel: $scope.form.yaxis,
                        tickFormat: function (d) {
                            return d3.format('.02f')(d);
                        },
                        axisLabelDistance: 35
                    },
                    callback: function (chart) {
                        console.log("!!! lineChart callback !!!");
                    }

                },
                title: {
                    enable: true,
                    text: ""
                },
            };
            var keyLabel = $scope.form.xaxis + " Vs " + $scope.form.yaxis;


            if ($scope.form.xaxis == "AcademicYears") {
                $scope.subDataObj = [{
                    values: $scope.subjects, // values - represents the
                    key: keyLabel, // key - the name of the series.
                    color: "rgb( 6, 140, 53 )", // color - optional: choose your own
                    strokeWidth: 3
                }

                ];
            } else if ($scope.form.xaxis == "Semesters") {
                $scope.subDataObj = [{
                    values: $scope.subjects, // values - represents the
                    key: keyLabel, // key - the name of the series.
                    color: "rgb( 241, 102, 35)", // color - optional: choose your own
                    strokeWidth: 3
                }

                ];
            } else if ($scope.form.xaxis == "Courses") {
                $scope.subDataObj = [{
                    values: $scope.subjects, // values - represents the
                    key: keyLabel, // key - the name of the series.
                    color: "rgb(31, 119, 180)", // color - optional: choose your own
                    strokeWidth: 3
                }

                ];
            } else if ($scope.form.xaxis == "Subjects") {
                $scope.subDataObj = [{
                    values: $scope.subjects, // values - represents the
                    key: keyLabel, // key - the name of the series.
                    color: "rgb(255,165,0)", // color - optional: choose your own
                    strokeWidth: 3
                }

                ];
            }


            $scope.dataBRAssetLine[$scope.linecount] = $scope.subDataObj;
            //alert(JSON.stringify( $scope.subDataObj));
            //alert(JSON.stringify( $scope.dataBRAssetLine[$scope.linecount]));
            $scope.graphArray.push({
                wid: $scope.linewidget[$scope.linecount],
                type: 'LineChart',
                options: $scope.line,
                data: $scope.dataBRAssetLine[$scope.linecount]
            });
            console.log($scope.graphArray);

        }

        if ($scope.form.chart == "PieChart") {

            $scope.piecount = $scope.piecount + 1;
            $scope.pieshow = true;
            if ($scope.areacount < 0) {
                $scope.areashow = false;
            } else {
                $scope.areashow = true;
            }

            if ($scope.linecount < 0) {
                $scope.lineshow = false;
            } else {
                $scope.lineshow = true;
            }

            $scope.getNumber = function (pc) {
                return new Array(pc);
            }

            $scope.piewidget[$scope.piecount] = $scope.form.widget;
            $scope.optionsPie = {
                chart: {
                    type: "pieChart",
                    height: 430,
                    x: function (d) {
                        return d.key;
                    },
                    y: function (d) {
                        return d.y;
                    },
                    showLabels: true,
                    duration: 500,
                    labelThreshold: 0.01,
                    labelSunbeamLayout: true,
                    legend: {
                        margin: {
                            top: 5,
                            right: 35,
                            bottom: 5,
                            left: 0
                        }
                    }
                }
            };

            $scope.dataPieChartBR[$scope.piecount] = $scope.piearray;
            /*[ {
             key: "Maths",
             y: 60,
             "color": "rgb( 205, 21, 51 )"
             }, {
             key: "physics",
             y: 70,
             "color": "rgb( 63, 81, 181 )"
             }, {
             key: "chemistry",
             y: 80,
             "color": "rgb( 255, 87, 34 )"
             }, {
             key: "Science",
             y: 100,
             "color": "rgb( 6, 140, 53 )"
             } ];*/
            $scope.graphArray.push({
                wid: $scope.piewidget[$scope.piecount],
                type: 'PieChart',
                options: $scope.optionsPie,
                data: $scope.dataPieChartBR[$scope.piecount]
            });


        }

    }


    function exportTableToCSV($table, filename) {
        // alert("inside")
        var $headers = $table.find('tr:has(th)'), $rows = $table.find('tr:has(td)'),
            tmpColDelim = String.fromCharCode(11), tmpRowDelim = String.fromCharCode(0), colDelim = '","',
            rowDelim = '"\r\n"';


        console.log($headers);
        // Grab text from table into CSV formatted string
        var csv = '"';
        csv += formatRows($headers.map(grabRow));
        csv += rowDelim;
        csv += formatRows($rows.map(grabRow)) + '"';

        // Data URI
        var csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv);

        // For IE (tested 10+)
        if (window.navigator.msSaveOrOpenBlob) {
            var blob = new Blob([decodeURIComponent(encodeURI(csv))], {
                type: "text/csv;charset=utf-8;"
            });
            navigator.msSaveBlob(blob, filename);
        } else {
            $(this)
                .attr({
                    'download': filename,
                    'href': csvData
                    //,'target' : '_blank' //if you want it to open in a new window
                });
        }

        //------------------------------------------------------------
        // Helper Functions
        //------------------------------------------------------------
        // Format the output so it has the appropriate delimiters
        function formatRows(rows) {
            return rows.get().join(tmpRowDelim)
                .split(tmpRowDelim).join(rowDelim)
                .split(tmpColDelim).join(colDelim);
        }

        // Grab and format a row from the table
        function grabRow(i, row) {

            var $row = $(row);
            //for some reason $cols = $row.find('td') || $row.find('th') won't work...
            var $cols = $row.find('td');
            if (!$cols.length) {
                $cols = $row.find('th');
            }

            return $cols.map(grabCol)
                .get().join(tmpColDelim);
        }

        // Grab and format a column from the table
        function grabCol(j, col) {
            var $col = $(col),
                $text = $col.text();

            return $text.replace('"', '""'); // escape double quotes

        }
    }


    // This must be a hyperlink
    $("#export").click(function (event) {


        // alert("clicked")
        // var outputFile = 'export'
        var outputFile = 'export';
        outputFile = outputFile.replace('.csv', '') + '.csv'

        // CSV
        exportTableToCSV.apply(this, [$('#dvData > table'), outputFile]);

        // IF CSV, don't do event.preventDefault() or return false
        // We actually need this to be a typical hyperlink
    });


    $scope.clear = function () {
        //  $scope.onloadtable = true;
        $scope.techtables = false;
        $scope.orgTable = false;
        $scope.editTable = false;
        $scope.courseShow = false;
        $scope.impbtn = false;
        $scope.widGraph = false;
        $scope.studenttable = false;
        $scope.Student = false;
        $scope.importbtn = false;
    }


    $scope.saveyes = function () {
        // $scope.onloadtable = false;
        $scope.courseShow = true;
        $scope.studentshow = true;
        $scope.Student = false;
        $scope.orgtable = false;
        $("#savepopup").modal("hide");

    }

    $scope.saveno = function () {
        // $scope.onloadtable = false;
        $("#savepopup").modal("hide");
        $scope.Student = false;
        $scope.studentshow = false;
    }


    $scope.orgImport = function () {
        //  $scope.onloadtable = false;
        $scope.sample = true;
        $scope.importbtn = true;
        $scope.import = true;
        $scope.impbtn = true;
        $scope.editTable = false;
        $scope.courseShow = false;
        $scope.orgTable = false;
        $scope.widGraph = false;
        $scope.studenttable = false;
        $scope.Student = false;
        $scope.welcome = false;
        $scope.studentshow = false;
        $scope.danger = false;

    }


    $scope.start = function () {
        //$scope.onloadtable = true;
        $scope.sample = true;
        $scope.importbtn = true;
        $scope.import = true;
        $scope.welcome = false;

    }
    $scope.studentImport = function () {

        if ($scope.flag == 1) {
            $scope.danger = true
            $scope.import = true;
            $scope.sample = true;
            $scope.welcome = false;

        }


        else {
            // $scope.onloadtable = false;
            $scope.courseShow = true;
            $scope.studentshow = true;
            $scope.impbtn = false;
            $scope.editTable = false;

            $scope.orgTable = false;
            $scope.widGraph = false;
            $scope.studenttable = false;
            $scope.Student = false;
            $scope.importbtn = false;
            $scope.welcome = false;
        }

    }
    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
    $scope.getAcademic = function (form) {
        $scope.importbtn = false;
        academicTemp = [];
        $scope.academicYear = [];
        $scope.error = "";
        console.log(form);
        var course = form.course;
        for (i = 0; i < $scope.orgCourseDetails.length; i++) {
            if ($scope.orgCourseDetails[i].courseName == course && $scope.orgCourseDetails[i].totalSemesters != "") {
                academicTemp.push($scope.orgCourseDetails[i].academicYear);
            }
        }
        academicTemp = academicTemp.filter(function (str) {
            return /\S/.test(str);
        });
        $.each(academicTemp, function (i, el) {
            if ($.inArray(el, $scope.academicYear) === -1) {
                $scope.academicYear.push(el);
            }
        });
        console.log($scope.academicYear);
        $scope.form.semester = null;
    }

    $scope.getSemester = function (form) {
        $scope.importbtn = false;
        semesterTemp = [];
        $scope.semester = [];
        $scope.error = "";
        console.log(form);
        $scope.semester = [];
        var semesterTemp = new Array();
        var course = form.course;
        var academic = form.academic;
        console.log($scope.Netsuite);
        for (i = 0; i < $scope.orgCourseDetails.length; i++) {
            if ($scope.orgCourseDetails[i].courseName == course && $scope.orgCourseDetails[i].academicYear == academic) {
                semesterTemp.push($scope.orgCourseDetails[i].totalSemesters);
                //console.log($scope.project);
            }
        }
        semesterTemp = semesterTemp.filter(function (str) {
            return /\S/.test(str);
        });
        $.each(semesterTemp, function (i, el) {
            if ($.inArray(el, $scope.semester) === -1) {
                $scope.semester.push(el);
            }
        });
        console.log($scope.semester);
        //$scope.form.semester = $scope.semester[0];
    }
    $scope.getImportBtn = function (form) {

        $scope.importbtn = true;
    }


    $scope.editItem = function (user) {
        user.editing = true;
    }

    $scope.doneEditing = function (user) {
        user.editing = false;

    };


    $scope.onloadGraph = function () {
        // alert("graph");
        $scope.widGraph = true;

        for (i = 0; i < $scope.widgetCharts.length; i++) {

            var a = $scope.widgetCharts[i].xaxis.toLowerCase();
            console.log(a);

            var b = $scope.widgetCharts[i].yaxis.toLowerCase();
            console.log(b);

            var values = [];
            $scope.areaChartData = [];
            $scope.subjects = [];
            /*for (var j = 0; j < values[a].length; j++) {
             $scope.subjects[j] = {
             "x": values[a][j],
             "y": values[b][j]
             }
             $scope.areaChartData.push( new Array(values[a][j], values[b][j]) );
             } */
            console.log($scope.subjects);
            $scope.subjectdata = $scope.subjects;
            console.log($scope.widgetCharts[i].chartType);
            if ($scope.widgetCharts[i].chartType == "PieChart") {

                $scope.piecount = $scope.piecount + 1;
                $scope.pieshow = true;
                if ($scope.areacount < 0) {
                    $scope.areashow = false;
                } else {
                    $scope.areashow = true;
                }

                if ($scope.linecount < 0) {
                    $scope.lineshow = false;
                } else {
                    $scope.lineshow = true;
                }

                $scope.getNumber = function (pc) {
                    return new Array(pc);
                }

                $scope.piewidget[$scope.piecount] = $scope.form.widget;
                $scope.optionsPie = {
                    chart: {
                        type: "pieChart",
                        height: 430,
                        x: function (d) {
                            return d.key;
                        },
                        y: function (d) {
                            return d.y;
                        },
                        showLabels: true,
                        duration: 500,
                        labelThreshold: 0.01,
                        labelSunbeamLayout: true,
                        legend: {
                            margin: {
                                top: 5,
                                right: 35,
                                bottom: 5,
                                left: 0
                            }
                        }
                    }
                };

                $scope.dataPieChartBR[$scope.piecount] = [{
                    key: "Maths",
                    y: 60,
                    "color": "rgb( 205, 21, 51 )"
                }, {
                    key: "physics",
                    y: 70,
                    "color": "rgb( 63, 81, 181 )"
                }, {
                    key: "chemistry",
                    y: 80,
                    "color": "rgb( 255, 87, 34 )"
                }, {
                    key: "Science",
                    y: 100,
                    "color": "rgb( 6, 140, 53 )"
                }];
                $scope.graphArray.push({
                    wid: $scope.widgetCharts[i].wid,
                    type: $scope.widgetCharts[i].chartType,
                    options: $scope.optionsPie,
                    data: $scope.dataPieChartBR[$scope.piecount]
                });

                /* $scope.graphArray.push({
                 wid: $scope.widgetCharts[i].wid,
                 type: $scope.widgetCharts[i].chartType,
                 options: $scope.optionsarea,
                 data: $scope.dataPieChartBR[$scope.piecount]
                 });*/

            }
            else if ($scope.widgetCharts[i].chartType == "LineChart") {


                $scope.linecount = $scope.linecount + 1;
                $scope.lineshow = true;
                if ($scope.areacount < 0) {
                    $scope.areashow = false;
                } else {
                    $scope.areashow = true;
                }

                if ($scope.piecount < 0) {
                    $scope.pieshow = false;
                } else {
                    $scope.pieshow = true;
                }

                $scope.getLineChartCount = function (lc) {

                    return new Array(lc);
                }
                $scope.linewidget[$scope.linecount] = $scope.form.widget;


                $scope.line = {
                    chart: {
                        zoom: {},
                        type: 'lineChart',
                        height: 420,
                        margin: {
                            top: 20,
                            right: 20,
                            bottom: 40,
                            left: 55
                        },
                        x: function (d) {
                            return d.x;
                        },
                        y: function (d) {
                            return d.y;
                        },
                        useInteractiveGuideline: true,
                        dispatch: {

                            stateChange: function (e) {
                                console.log("stateChange");
                            },
                            changeState: function (e) {
                                console.log("changeState");
                            },
                            tooltipShow: function (e) {
                                console.log("tooltipShow");
                            },
                            tooltipHide: function (e) {
                                console.log("tooltipHide");
                            }
                        },
                        xAxis: {
                            axisLabel: $scope.form.xaxis
                        },
                        yAxis: {
                            axisLabel: $scope.form.yaxis,
                            tickFormat: function (d) {
                                return d3.format('.02f')(d);
                            },
                            axisLabelDistance: 35
                        },
                        callback: function (chart) {
                            console.log("!!! lineChart callback !!!");
                        }

                    },
                    title: {
                        enable: true,
                        text: ""
                    },
                };

                $scope.line = {
                    chart: {
                        zoom: {},
                        type: 'lineChart',
                        height: 420,
                        margin: {
                            top: 20,
                            right: 20,
                            bottom: 40,
                            left: 55
                        },
                        x: function (d) {
                            return d.x;
                        },
                        y: function (d) {
                            return d.y;
                        },
                        useInteractiveGuideline: true,
                        dispatch: {

                            stateChange: function (e) {
                                console.log("stateChange");
                            },
                            changeState: function (e) {
                                console.log("changeState");
                            },
                            tooltipShow: function (e) {
                                console.log("tooltipShow");
                            },
                            tooltipHide: function (e) {
                                console.log("tooltipHide");
                            }
                        },
                        xAxis: {
                            axisLabel: $scope.form.xaxis
                        },
                        yAxis: {
                            axisLabel: $scope.form.yaxis,
                            tickFormat: function (d) {
                                return d3.format('.02f')(d);
                            },
                            axisLabelDistance: 35
                        },
                        callback: function (chart) {
                            console.log("!!! lineChart callback !!!");
                        }

                    },
                    title: {
                        enable: true,
                        text: ""
                    },
                };

                var keyLabel = $scope.widgetCharts[i].xaxis + " Vs " + $scope.widgetCharts[i].yaxis;
                $scope.subDataObj = [{
                    values: $scope.subjects, // values - represents the
                    key: keyLabel, // key - the name of the series.
                    color: '#e43234', // color - optional: choose your own
                    strokeWidth: 3
                }

                ];

                $scope.dataBRAssetLine[$scope.linecount] = $scope.subDataObj;
                $scope.graphArray.push({
                    wid: $scope.widgetCharts[i].wid,
                    type: $scope.widgetCharts[i].chartType,
                    options: $scope.line,
                    data: $scope.dataBRAssetLine[$scope.linecount]
                });
                console.log($scope.graphArray);
                /* $scope.graphArray.push({
                 wid: $scope.widgetCharts[i].wid,
                 type: $scope.widgetCharts[i].chartType,
                 options: $scope.optionsarea,
                 data: $scope.dataPieChartBR[$scope.piecount]
                 });

                 */
            }
            else if ($scope.widgetCharts[i].chartType == "AreaChart") {

                //$scope.areawidget.push($scope.form.widget);
                $scope.areacount = $scope.areacount + 1;
                $scope.areashow = true;
                if ($scope.linecount < 0) {
                    $scope.lineshow = false;
                } else {
                    $scope.lineshow = true;
                }

                if ($scope.piecount < 0) {
                    $scope.pieshow = false;
                } else {
                    $scope.pieshow = true;
                }
                $scope.areawidget[$scope.areacount] = $scope.form.widget;

                $scope.optionsarea = {
                    chart: {
                        showControls: false,
                        type: "stackedAreaChart",
                        height: 430,
                        margin: {
                            top: 20,
                            right: 20,
                            bottom: 30,
                            left: 40
                        },
                        x: function (d) {
                            return d[0];
                        },
                        y: function (d) {
                            return d[1];
                        },

                        useVoronoi: false,
                        clipEdge: true,
                        duration: 100,
                        useInteractiveGuideline: true,
                        xAxis: {
                            showMaxMin: false,
                            tickFormat: function (d) {
                                return d3.format(",.2f")(d);
                            }
                        },
                        yAxis: {
                            tickFormat: function (d) {
                                return d3.format(",.2f")(d);
                            }
                        },
                        zoom: {
                            enabled: true,
                            scaleExtent: [1, 10],
                            useFixedDomain: false,
                            useNiceScale: false,
                            horizontalOff: false,
                            verticalOff: true,
                            unzoomEventType: "dblclick.zoom"
                        }
                    }
                };


                var keyLabel1 = $scope.widgetCharts[i].xaxis + " Vs " + $scope.widgetCharts[i].yaxis;
                console.log($scope.areaChartData);
                $scope.dataBRAsset[$scope.areacount] = [{
                    "key": keyLabel1,
                    "values": $scope.areaChartData,
                    "color": "rgb( 6, 140, 53 )"
                }];

                $scope.graphArray.push({
                    wid: $scope.widgetCharts[i].wid,
                    type: $scope.widgetCharts[i].chartType,
                    options: $scope.optionsarea,
                    data: $scope.dataBRAsset[$scope.areacount]
                });
            }


            /* $scope.graphdata.push ( {
             "color": "#e43234",
             "key":$scope.widgetCharts[i].xaxis + " vs " + $scope.widgetCharts[i].yaxis

             });*/
        }
    }


    $scope.postChangePassword = function (registorUrl, successUrl) {


        c = document.cookie.split(';');
        var cookies = {};
        for (i = c.length - 1; i >= 0; i--) {
            C = c[i].split('=');
            C[0] = C[0].replace(" ", "");
            console.log(C[0]);
            //C[0].trim();
            //console.log(C[0]);
            if (C[0] == "sessionId") {
                cookies[C[0]] = C[1];
            }

        }
        if ($scope.oldpassword == undefined || $scope.oldpassword == "") {
            $scope.flagg = true;
            $scope.errormessage = "Please enter oldpassword";
        } else if ($scope.newpassword1 == undefined || $scope.newpassword1 == "") {
            $scope.flagg = true;
            $scope.errormessage = "Please enter password";

        } else if ($scope.confirmnewpassword == undefined || $scope.confirmnewpassword == "") {
            $scope.flagg = true;
            $scope.errormessage = "Please enter Confirm password";
        } else if (( $scope.newpassword1.length ) > 16) {
            $scope.flagg = true;
            $scope.errormessage = "Password should not have more than 16 characters";

        } else if (($scope.newpassword1.length) < 6) {
            $scope.flagg = true;
            $scope.errormessage = "Password should have atleast 6 alphanumeric characters including an 1upper case and 1 lower case";
        } else if (( /^[A-Za-z0-9!@#$%^&*(   )_]{6,16}$/ )
                .test($scope.newpassword1)) {
            if (( /^[\S]+$/ ).test($scope.newpassword1)) {

                if (( /^[^a-z]+$/ ).test($scope.newpassword1)) {
                    $scope.flagg = true;
                    $scope.errormessage = "Password should have atleast one lower case character";
                } else if (( /^[^A-Z]+$/ ).test($scope.newpassword1)) {
                    $scope.flagg = true;
                    $scope.errormessage = "Password should have atleast one upper case character";
                } else if (( /^[^0-9]+$/ ).test($scope.newpassword1)) {
                    $scope.flagg = true;
                    $scope.errormessage = "Password should have atleast one numerical character";
                } else if ($scope.oldpassword == $scope.newpassword1) {
                    $scope.flagg = true;
                    $scope.errormessage = "The oldpassword and newPassword should be different,Please check";
                }
                else if ($scope.newpassword1 != $scope.confirmnewpassword) {
                    $scope.flagg = true;
                    $scope.errormessage = "The password and confirmPassword is not matching,Please check";
                }
                else {


                    $scope.data = {

                        sessionId: cookies["sessionId"],
                        actionType: "ChangePassword",
                        oldpassword: $scope.oldpassword,
                        newpassword: $scope.newpassword1,

                    };
                   // alert(JSON.stringify($scope.data))
                    console.log($scope.data);

                    $http({
                        method: 'POST',
                        url: '/reset',
                        data: $scope.data,
                        headers: {'Content-Type': 'application/json'}
                    }).then(function mySucces(response) {
                     //   alert("Got Response!");
                        $scope.myWelcome = {};
                        $scope.myWelcome = response.data;
                       // alert($scope.myWelcome.status);
                        if ($scope.myWelcome.status == "success") {
                            //alert($scope.myWelcome.error)
                            window.location = successUrl;
                        }
                        else {
                            // window.location = successUrl;
                            $scope.flagg1 = true;
                            $scope.errormessage1 = "Old Password you have entered is wrong";

                        }
                    }, function myError(response) {
                        //alert("Erorr");
                        $scope.myWelcome = response.statusText;

                    });
                }
            }
        }

    };


    $scope.postRegistorFunction = function (registorUrl, successUrl) {


        if ($scope.password == undefined || $scope.password == "") {
            $scope.flaggp = true;
            $scope.passworderror = "Please enter password";

        } else if ($scope.confirmPassword == undefined || $scope.confirmPassword == "") {
            $scope.flaggp = false;
            $scope.flaggpc = true;
            $scope.confirmPassworderror = "Please enter Confirm password";
        } else if (( $scope.password.length ) > 16) {
            $scope.flaggp = true;
            $scope.passworderror = "Password should not have more than 16 characters";
            $scope.flaggpc = true;
            $scope.confirmPassworderror = "Password should not have more than 16 characters";

        } else if (($scope.password.length) < 6) {
            $scope.flaggp = true;
            $scope.passworderror = "Password should have atleast 6 alphanumeric characters including an 1upper case and 1 lower case";
            $scope.flaggpc = true;
            $scope.confirmPassworderror = "Password should have atleast 6 alphanumeric characters including an 1upper case and 1 lower case";
        } else if (( /^[A-Za-z0-9!@#$%^&*(   )_]{6,16}$/ )
                .test($scope.password)) {
            if (( /^[\S]+$/ ).test($scope.password)) {

                if (( /^[^a-z]+$/ ).test($scope.password)) {
                    $scope.flaggp = true;
                    $scope.passworderror = "Password should have atleast one lower case character";
                    $scope.flaggpc = true;
                    $scope.confirmPassworderror = "Password should have atleast one lower case character";
                } else if (( /^[^A-Z]+$/ ).test($scope.password)) {
                    $scope.flaggp = true;
                    $scope.passworderror = "Password should have atleast one upper case character";
                    $scope.flaggpc = true;
                    $scope.confirmPassworderror = "Password should have atleast one upper case character";
                } else if (( /^[^0-9]+$/ ).test($scope.password)) {
                    $scope.flaggp = true;
                    $scope.passworderror = "Password should have atleast one numerical character";
                    $scope.flaggpc = true;
                    $scope.confirmPassworderror = "Password should have atleast one numerical character";
                }
                else if ($scope.password != $scope.confirmPassword) {
                    $scope.flaggp = true;
                    $scope.passworderror = "The password and confirmPassword is not matching,Please check";
                    $scope.flaggpc = true;
                    $scope.confirmPassworderror = "The password and confirmPassword is not matching,Please check";
                }
                else {
                    $scope.flaggpc = false;
                    $scope.data = {
                        firstName: $scope.firstname,
                        lastName: $scope.lastname,
                        emailId: $scope.email,
                        password: $scope.password,
                        role: $scope.form.typeofadmin,
                        organization: $scope.organizationname,


                    };

                    console.log($scope.data);

                    $http({
                        method: 'POST',
                        url: '/registor1',
                        data: $scope.data,
                        headers: {'Content-Type': 'application/json'}
                    }).then(function mySucces(response) {
                        //alert("Registor response successfully!");
                        $scope.myWelcome = response.data;
                        //window.location = successUrl;
                        if ($scope.myWelcome.status == "success") {
                            $("#register").modal("hide");
                            $("#registerConfirm").modal("show");


                        }
                        else {
                            //alert($scope.myWelcome.status)
                            $("#register").modal("hide");
                            $("#registerFailure").modal("show");


                        }

                    }, function myError(response) {
                        //alert("Erorr");
                        $scope.myWelcome = response.statusText;
                        console.log("fail");
                        //alert($scope.myWelcome.failure);
                    });

                }
            }
        }
    };


    $scope.logout = function () {
        var x = document.cookie;
        c = document.cookie.split(';');
        var cookies = {};

        for (i = c.length - 1; i >= 0; i--) {
            C = c[i].split('=');
            C[0] = C[0].replace(" ", "");
            console.log(C[0]);
            //C[0].trim();
            //console.log(C[0]);
            if (C[0] == "sessionId") {
                cookies[C[0]] = C[1];
            }
        }
        $scope.data = {

            sessionid: cookies["sessionId"]

        };

        $http({
            method: 'POST',
            url: '/logout',
            data: $scope.data,
            headers: {'Content-Type': 'application/json'}

        }).then(function (response) {

            $scope.myWelcome = response.data;

            console.log(response);
            //console.log(response.data);

            if ($scope.myWelcome.status == "Success") {
                var ses = "";
                document.cookie = "sessionId=" + ses;
                console.log(cookies);

                window.location = '/';
            }
            else {
                console.log("Logout Fail");

            }

        }, function (error) {
            // alert("Erorr1");
            console.log(response);

            $scope.myWelcome1 = response.statusText;


        });

    };


    $scope.open = function () {
        $("#widget").modal("show");
        $scope.form.xaxis = null;
        $scope.form.yaxis = null;
        $scope.form.chart = null;
        $scope.form.widget = null;
        $scope.orgTable = false;
        $scope.editTable = false;
        $scope.courseShow = false;
        $scope.studentshow = false;
        $scope.impbtn = false;
        $scope.widGraph = false;
        $scope.studenttable = false;
        $scope.Student = false;
        $scope.importbtn = false;
        //$scope.onloadtable = false;
    };
    $scope.register = function () {
        //  $scope.onloadtable = false;
        $scope.flaggp = false;
        $scope.flaggpc = false;
        $scope.firstname = null;
        $scope.lastname = null;
        $scope.email = null;
        $scope.password = null;
        $scope.confirmPassword = null;
        $scope.form.typeofadmin = null;
        $scope.organizationname = null;
        $("#register").modal("show");
        $scope.orgTable = false;
        $scope.editTable = false;
        $scope.courseShow = false;
        $scope.studentshow = false;
        $scope.impbtn = false;
        $scope.widGraph = false;
        $scope.studenttable = false;
        $scope.Student = false;
        $scope.importbtn = false;


    };

    $scope.onload = function () {

        //  $scope.widGraph = true
        $scope.grapArray = [];
        $scope.areaChartData = [];
        $scope.subjects = [];

        var x = document.cookie;

        c = document.cookie.split(';');
        var cookies = {};

        for (i = c.length - 1; i >= 0; i--) {
            C = c[i].split('=');
            C[0] = C[0].replace(" ", "");
            console.log(C[0]);

            if (C[0] == "sessionId") {
                cookies[C[0]] = C[1];
            }

        }
        console.log(C);
        console.log(c);
        // alert(cookies["sessionId"]);
        console.log(cookies["sessionId"]);

        var strCookies = document.cookie;
        console.log(strCookies);
        var cookiearray = strCookies.split(';')
        console.log(cookiearray);


        $scope.data = {

            sessionid: cookies["sessionId"]

        };


        console.log($scope.data);
        if ($scope.data.sessionid == undefined || $scope.data.sessionid == "") {
            window.location = '/';
        }
        else {

            $http({
                method: 'POST',
                url: '/session',
                data: $scope.data,
                headers: {'Content-Type': 'application/json'}

            }).then(function (response) {

                $scope.myWelcome = response.data;
                console.log(response.data);

                if ($scope.myWelcome[0].status == "success") {

                    $http({
                        method: 'POST',
                        url: '/fetchuser',
                        data: $scope.data,
                        headers: {'Content-Type': 'application/json'}

                    }).then(function (response) {

                        $scope.myWelcome = response.data;
                        //alert(JSON.stringify(response.data));
                        console.log(response);
                        console.log(response.data);

                        if ($scope.myWelcome.status == "success") {
                            /*alert($scope.myWelcome.marksRespJson)
                             //alert($scope.myWelcome.marksRespJson.org_name)
                             // alert($scope.myWelcome.marksRespJson.marks)
                             //alert($scope.myWelcome.marksRespJson.marks[1].subject)*/
                            console.log($scope.myWelcome.language);
                            console.log($scope.myWelcome.technology);
                            $scope.tech = [];
                            $scope.lang = [];


                            $scope.myWelcome.language.sort(function (a, b) {
                                if (Number(a.weightage) < Number(b.weightage)) {
                                    return -1;
                                } else if (Number(a.weightage) > Number(b.weightage)) {
                                    return 1;
                                } else {
                                    return 0;
                                }
                            });
                            console.log($scope.myWelcome.language);
                            // $scope.lang =$scope.myWelcome.language;


                            $scope.myWelcome.technology.sort(function (a, b) {
                                if (Number(a.weightage) < Number(b.weightage)) {
                                    return -1;
                                } else if (Number(a.weightage) > Number(b.weightage)) {
                                    return 1;
                                } else {
                                    return 0;
                                }
                            });
                            for (i = 0; i < $scope.myWelcome.technology.length; i++) {
                                $scope.tech.push({
                                    "rank": i + 1,
                                    "technology": $scope.myWelcome.technology[i].technology,
                                    "weightage": $scope.myWelcome.technology[i].weightage
                                });
                            }

                            for (i = 0; i < $scope.myWelcome.language.length; i++) {
                                $scope.lang.push({
                                    "rank": i + 1,
                                    "technology": $scope.myWelcome.language[i].technology,
                                    "weightage": $scope.myWelcome.language[i].weightage
                                });
                            }


                            console.log($scope.myWelcome.technology);
                            console.log($scope.tech);
                           // alert(JSON.stringify($scope.tech));
                            $scope.newArr = [];
                            j=-1;
                            $scope.colors=["red","blue","blue","OrangeRed","OrangeRed","skyblue","skyblue","Aquamarine","Aquamarine","Cyan","Cyan","OrangeRed","#228B22","#228B22",
                                "#4682B4","#4682B4"];
                            $scope.newArr = [];
                                for(i=0;i<$scope.tech.length;i++) {
                                    $scope.newArr.push( {"label": $scope.tech[i].technology, "value": $scope.tech[i].rank,"color":$scope.colors[++j]});
                            }
                             //alert(JSON.stringify( $scope.newArr));
                            j=-1
                                $scope.newArr1 = [];

                            for(i=0;i<$scope.lang.length;i++) {
                                $scope.newArr1.push( {"label": $scope.lang[i].technology, "value": $scope.lang[i].rank,"color":$scope.colors[++j]});
                            }
                             //alert(JSON.stringify( $scope.newArr1));
                            //$scope.tech =$scope.myWelcome.technology;

                            $scope.bar = [];
                            $scope.bar1 = [];

                            $scope.bar.push({
                                "key": "Languages",
                                "values": $scope.newArr1
                            })
                            $scope.bar1.push({
                                "key": "Technologies",
                                "values": $scope.newArr
                            })
                            // alert(JSON.stringify($scope.bar));

                            $scope.subjectsonload = [];
                            for (var i = 0; i < $scope.tech.length; i++) {

                                $scope.subjectsonload.push({
                                    "x": $scope.tech[i].technology,
                                    "y": $scope.tech[i].weightage * 1
                                });

                            }


//alert(JSON.stringify( $scope.subjectsonload));
                            console.log($scope.subjectsonload);
                            $scope.optionsLineOnload = {
                                chart: {
                                    type: 'multiBarChart',
                                    height: 450,
                                    margin: {
                                        top: 20,
                                        right: 20,
                                        bottom: 150,
                                        left: 70
                                    },



                                    reduceXTicks: false,
                                    x: function(d){return d.label;},
                                    y: function(d){return d.value;},
                                    xAxis: {
                                        axisLabel: 'Languages',
                                        showMaxMin: false,
                                        rotateLabels: 30,
                                        axisLabelDistance: 100,
                                        /*tickFormat: fu  :nction(d){
                                         return d3.format(',f')(d);
                                         }*/
                                    },
                                    yAxis: {
                                        axisLabel: 'Ranks',
                                        axisLabelDistance: 10,
                                        /*tickFormat: function(d){
                                         return d3.format(',.1f')(d);
                                         }*/
                                    }
                                }
                            };

                            $scope.dataLineOnload = $scope.bar;


                            $scope.optionsLineOnload1 = {
                                chart: {
                                    type: 'multiBarChart',
                                    height: 450,
                                    margin: {
                                        top: 20,
                                        right: 20,
                                        bottom: 150,
                                        left: 70
                                    },

                                    zoom: {
                                        enabled: true,
                                        scaleExtent: [1, 10],
                                        useFixedDomain: false,
                                        useNiceScale: false,
                                        horizontalOff: false,
                                        verticalOff: true,
                                        unzoomEventType: "dblclick.zoom"
                                    },

                                    clipEdge: true,
                                    //duration: 500,
                                    stacked: true,
                                    reduceXTicks: false,
                                    x: function(d){return d.label;},
                                    y: function(d){return d.value;},
                                    xAxis: {
                                        axisLabel: 'Technology',
                                        showMaxMin: false,
                                        rotateLabels: 20,
                                        axisLabelDistance: 60,
                                        /*tickFormat: fu  :nction(d){
                                         return d3.format(',f')(d);
                                         }*/
                                    },
                                    yAxis: {
                                        axisLabel: 'Ranks',
                                        axisLabelDistance: 10,
                                        /*tickFormat: function(d){
                                         return d3.format(',.1f')(d);
                                         }*/
                                    }
                                }
                            };

                            $scope.dataLineOnload1 = $scope.bar1;


                            /*


                             $scope.optionsLine = {
                             chart: {
                             type: 'multiBarHorizontalChart',
                             height: 450,
                             x: function(d){return d.label;},
                             y: function(d){return d.value;},
                             showControls: true,
                             showValues: true,
                             duration: 500,
                             xAxis: {
                             showMaxMin: false
                             },
                             yAxis: {
                             axisLabel: 'Values',
                             tickFormat: function(d){
                             return d3.format(',.2f')(d);
                             }
                             }
                             }
                             };


                             $scope.dataLine =  $scope.bar;*/


                            $scope.widgetCharts = [];
                            console.log($scope.myWelcome.charts);
                            $scope.widgetCharts = $scope.myWelcome.charts;
                            console.log($scope.widgetCharts);
                            $scope.graphdata = [];
                            $scope.welcome = false;
                            $scope.sample = true;
                            $scope.import = true;

                            //$scope.onloadGraph();

                            $scope.organId = $scope.myWelcome.dashboard.orgId;
                            console.log($scope.organId);
                            $scope.organisation = $scope.myWelcome.dashboard.organization;
                            // alert($scope.organisation);
                            $scope.roles = $scope.myWelcome.dashboard.role;
                            $scope.firstName = $scope.myWelcome.dashboard.firstName;
                            console.log($scope.organisation);
                            $scope.dupCourses = [];
                            $scope.orgCourses = [];
                            console.log($scope.myWelcome.courses.length);
                            if ($scope.myWelcome.courses.length > 0) {
                                //alert("hi");
                                $scope.studentshow = true
                                $scope.courseShow = true;
                                $scope.sample = false;
                                $scope.import = false;
                                $scope.impbtn = false;
                            }
                            else {
                                $scope.welcome = true;
                                //$scope.impbtn = true;
                                $scope.flag = 1;

                                $scope.sample = false;
                                $scope.import = false;
                            }
                            //$scope.csvresult = $scope.myWelcome.courses;
                            $scope.orgCourseDetails = $scope.myWelcome.courses;
                            for (i = 0; i < $scope.orgCourseDetails.length; i++) {
                                $scope.dupCourses.push($scope.orgCourseDetails[i].courseName);
                            }
                            console.log($scope.dupCourses);

                            $.each($scope.dupCourses, function (i, el) {
                                if ($.inArray(el, $scope.orgCourses) === -1) {
                                    $scope.orgCourses.push(el);
                                }
                            });
                            console.log($scope.orgCourses);
                            //alert("in success user");
                            console.log($scope.myWelcome.dashboard.defaultPasswordFlag);
                            if ($scope.myWelcome.dashboard.defaultPasswordFlag == 0) {
                                $('#changepassword').modal({backdrop: 'static', keyboard: false})
                                $("#changepassword").modal("show");
                            }
                            else {
                                $("#changepassword").modal("hide");
                            }

                            console.log($scope.myWelcome.dashboard.role);
                            if ($scope.myWelcome.dashboard.role == "superadmin") {
                                $scope.organ = false;
                                $scope.onloadtable = false;
                                $scope.studentshow = false;
                                $scope.courseShow = false;
                                $scope.typeofadmin = ["admin", "user"];
                                $scope.button = "Register an Organisation";
                                $scope.widstyle = "float: right; margin-top: -5%;margin-right: 20%;";
                                $scope.signup = "Creating an Admin";
                                $scope.memberTable = true;
                                $scope.sample = false;
                                $scope.import = false;
                                //Ajax call to fill the Members table
                                $scope.data = {
                                    "actionType": "GetAllMembers",
                                    "memberType": "Super/Admin/User"

                                };
                                console.log($scope.data);

                                $scope.membersList = [];
                                $http({
                                    method: 'POST',
                                    url: '/getAllMembers',
                                    data: $scope.data,
                                    headers: {'Content-Type': 'application/json'}
                                }).then(function mySucces(response) {
                                    $scope.myWelcome = {};
                                    $scope.myWelcome = response.data;
                                    console.log(response.data);

                                    if ($scope.myWelcome.status == "Success") {
                                        //alert("success")
                                        for (i = 0; i < $scope.myWelcome.members.length; i++) {
                                            $scope.membersList.push({
                                                //"S No.": i + 1,
                                                "firstName": $scope.myWelcome.members[i].firstName,
                                                "lastName": $scope.myWelcome.members[i].lastName,
                                                "emailId": $scope.myWelcome.members[i].emailId,
                                                "role": $scope.myWelcome.members[i].role,
                                                "organization": $scope.myWelcome.members[i].organization,
                                                "orgId": $scope.myWelcome.members[i].orgId,
                                            });
                                        }
                                        console.log($scope.membersList)
                                    }
                                    else {
                                        //alert("failed")
                                    }

                                }, function myError(response) {
                                    $scope.myWelcome = response.statusText;
                                    //alert("Error in RestAPI")

                                });


                            } else if ($scope.myWelcome.dashboard.role == "admin") {
                                $scope.typeofadmin = ["user"];
//alert("hi");
                                $scope.button = "Register User";
                                $scope.widstyle = "float: right; margin-top: -4.5%;margin-right: 14%;";
                                $scope.signup = "Creating users";
                            } else {
                                $scope.buttonshow = false;
                                $scope.typeofadmin = [];
                                $scope.widstyle = "float: right; margin-top: -2%;";
                            }
//parse the dropdown string in object
                            // alert();
                            console.log("dropdown--> " + $scope.myWelcome.dropdown);
                            $scope.dropdownParse = JSON.parse($scope.myWelcome.dropdown);
                            // alert("dropdownParse--> " + JSON.stringify($scope.dropdownParse));
                            //console.log( "dropdownParse--> " + JSON.stringify( $scope.dropdownParse.courses.Couse1["2011-2012"] ) );
                            //console.log( "dropdownParse--> " + JSON.stringify( $scope.dropdownParse.acc_year["2011-2012"].Couse1 ) );
                            //console.log( "dropdownParse--> " + JSON.stringify( $scope.dropdownParse.semesters["1"]["2011-2012"] ) );

//ploting graph in onload dashboard from fetchAPI
                            //alert($scope.myWelcome.charts)
                            $scope.onloadWidgetGraph();

                        }
                        else {
                            // alert("in fail user");
                            //window.location = '/';
                        }

                    }, function (error) {
                        // alert("Erorr1");
                        console.log(response);
                        //alert(JSON.stringify(response));
                        $scope.myWelcome1 = response.statusText;


                    });

                }
                else {
                    //alert("in fail");
                    window.location = '/';
                }

            }, function (error) {

                console.log("Fail");

            });


        }

    };

    $scope.blockFlag = function (email) {
        $scope.email = email;
        //alert("working " + $scope.email)

        $('#blockFlagPopup').modal("show");
        //ajax call to block
        $scope.noBlock = function () {
            $('#blockFlagPopup').modal("hide");
        }

        $scope.yesBlock = function () {
            $('#blockFlagPopup').modal("hide");
            $scope.data = {
                emailId: $scope.email,
                actionType: "block"

            };
            $http({
                method: 'POST',
                url: '/editFlag',
                data: $scope.data,
                headers: {'Content-Type': 'application/json'}
            }).then(function mySucces(response) {
                //alert("Got Response!");
                $scope.myWelcome = {};
                $scope.myWelcome = response.data;
                console.log(response.data);

                if ($scope.myWelcome.status == "Success") {
                    $scope.blockshow = false;
                    $scope.unblockshow = true;
                    console.log("message: " + $scope.myWelcome.Message)
                }
                else {
                    $scope.blockshow = false;
                    $scope.unblockshow = true;
                    console.log("message: " + $scope.myWelcome.Message)
                }
            }, function myError(response) {
                //alert("Erorr");
                $scope.myWelcome = response.statusText;
                //alert($scope.myWelcome);
            });
        }
    }

    $scope.unblockFlag = function (email) {
        $scope.email = email;
        //alert("working " + $scope.email)

        $('#unblockFlagPopup').modal("show");
        //ajax call to block
        $scope.noUnBlock = function () {
            $('#unblockFlagPopup').modal("hide");
        }

        $scope.yesUnBlock = function () {
            $('#unblockFlagPopup').modal("hide");
            $scope.data = {
                emailId: $scope.email,
                actionType: "unblock"

            };
            $http({
                method: 'POST',
                url: '/editFlag',
                data: $scope.data,
                headers: {'Content-Type': 'application/json'}
            }).then(function mySucces(response) {
                //alert("Got Response!");
                $scope.myWelcome = {};
                $scope.myWelcome = response.data;
                console.log(response.data);

                if ($scope.myWelcome.status == "Success") {
                    $scope.blockshow = true;
                    $scope.unblockshow = false;
                    console.log("message: " + $scope.myWelcome.Message)
                }
                else {
                    $scope.blockshow = true;
                    $scope.unblockshow = false;
                    console.log("message: " + $scope.myWelcome.Message)
                }
            }, function myError(response) {
                //alert("Erorr");
                $scope.myWelcome = response.statusText;
                //alert($scope.myWelcome);
            });
        }
    }

//nitin
    $scope.getWidgetDetails = function (form) {
        $scope.coursesWidget = [];
        $scope.dupCourses = [];
        $scope.allCoursesAvg = [];
        $scope.dupacademicYear = [];
        $scope.allAcademicYears = [];
        $scope.dupSemesters = [];
        $scope.allSemesters = [];
        $scope.dupSubjects = [];
        $scope.allSubjectAvg = [];
        $scope.orgCourseDetails = [];
        $scope.marksDetails = [];


        $scope.orgCourseDetails = $scope.myWelcome.courses;


        // alert($scope.orgCourseDetails)
        // alert($scope.myWelcome.marksRespJson.marks)
        /*$scope.marksDetails = $scope.myWelcome.marksRespJson.marks;
         $scope.marksSemester = $scope.myWelcome.semester;*/
        //alert("marksdetails: " + $scope.marksDetails)

        if ($scope.form.xaxis == "Courses") {
            $scope.tag3 = true;
            $scope.tag1 = false;
            $scope.tag2 = false;
            $scope.tag4 = false;

            $scope.form.allCoursesAvg = null;
            $scope.form.allAcademicYears = null;
            $scope.form.allSemesters = null;
            $scope.form.allSubjectAvg = null;

            $scope.allCoursesAvg = [];
            $scope.allAcademicYears = [];
            $scope.allSemesters = [];
            $scope.allSubjectAvg = [];
            //$scope.dupCourses = [];

            console.log("couses: " + $scope.allCoursesAvg + " " + "academic: " + $scope.allAcademicYears + "semster: " + $scope.allSemesters + "subject:" + $scope.allSubjectAvg)

            //alert($scope.dropdownParse.courses)
            for (i = 0; i < ( Object.keys($scope.dropdownParse.courses)).length; i++) {
                $scope.allCoursesAvg.push(( Object.keys($scope.dropdownParse.courses))[i]);
            }
            console.log($scope.allCoursesAvg);

            console.log("couses: " + $scope.allCoursesAvg + " " + "academic: " + $scope.allAcademicYears + "semster: " + $scope.allSemesters + "subject:" + $scope.allSubjectAvg)
            /*for(i = 0;i < $scope.orgCourseDetails.length;i++){
             $scope.dupCourses.push($scope.orgCourseDetails[i].courseName);

             }
             console.log($scope.dupCourses);
             //alert($scope.dupCourses)

             $.each($scope.dupCourses, function( i, el ){
             if($.inArray( el, $scope.allCoursesAvg) === -1 ) {
             $scope.allCoursesAvg.push( el );
             }
             });*/
            //alert($scope.allCoursesAvg)
            /*$scope.getallAcademicYears = function ( form ) {
             $scope.allAcademicYears = [ "ChooseAllYears", "2015-2016", "2016-2017", "2017-2018" ];
             }
             console.log($scope.allCoursesAvg);*/
        }
        else if ($scope.form.xaxis == "AcademicYears") {
            $scope.tag1 = true;
            $scope.tag2 = false;
            $scope.tag3 = false;
            $scope.tag4 = false;

            $scope.form.allCoursesAvg = null;
            $scope.form.allAcademicYears = null;
            $scope.form.allSemesters = null;
            $scope.form.allSubjectAvg = null;

            //$scope.dupacademicYear = [];
            $scope.allAcademicYears = [];
            $scope.allCoursesAvg = [];
            $scope.allSemesters = [];
            $scope.allSubjectAvg = [];


            for (i = 0; i < (Object.keys($scope.dropdownParse.acc_year)).length; i++) {
                $scope.allAcademicYears.push((Object.keys($scope.dropdownParse.acc_year))[i]);
            }
            console.log($scope.allAcademicYears);

            /*for(i = 0;i < $scope.orgCourseDetails.length;i++){
             $scope.dupacademicYear.push($scope.orgCourseDetails[i].academicYear);
             }
             console.log($scope.dupacademicYear);

             $.each($scope.dupacademicYear, function( i, el ){
             if($.inArray( el, $scope.allAcademicYears) === -1 ) {
             $scope.allAcademicYears.push( el );
             }
             });*/
            /*console.log($scope.allAcademicYears);*/

        }
        else if ($scope.form.xaxis == "Semesters") {
            $scope.tag2 = true;
            $scope.tag1 = false;
            $scope.tag3 = false;
            $scope.tag4 = false;

            $scope.form.allCoursesAvg = null;
            $scope.form.allAcademicYears = null;
            $scope.form.allSemesters = null;
            $scope.form.allSubjectAvg = null;
            //$scope.dupSemesters = [];
            $scope.allSemesters = [];
            $scope.allCoursesAvg = [];
            $scope.allAcademicYears = [];
            $scope.allSubjectAvg = [];

            //$scope.allSemesters.push("Select all Semester");
            for (i = 0; i < (Object.keys($scope.dropdownParse.semesters)).length; i++) {
                $scope.allSemesters.push((Object.keys($scope.dropdownParse.semesters))[i]);
            }
            console.log($scope.allSemesters);

            /*for(i = 0;i < $scope.orgCourseDetails.length;i++){
             $scope.dupSemesters.push($scope.orgCourseDetails[i].totalSemesters);
             }
             console.log($scope.dupSemesters);

             $.each($scope.dupSemesters, function( i, el ){
             if($.inArray( el, $scope.allSemesters) === -1 ) {
             $scope.allSemesters.push( el );
             }
             });
             console.log($scope.allSemesters);*/


        }
        else if ($scope.form.xaxis == "Subjects") {
            $scope.tag4 = true;
            $scope.tag1 = false;
            $scope.tag2 = false;
            $scope.tag3 = false;

            $scope.form.allCoursesAvg = null;
            $scope.form.allAcademicYears = null;
            $scope.form.allSemesters = null;
            $scope.form.allSubjectAvg = null;
            //$scope.dupSubjects = [];
            $scope.allSubjectAvg = [];
            $scope.allCoursesAvg = [];
            $scope.allAcademicYears = [];
            $scope.allSemesters = [];

            for (i = 0; i < (Object.keys($scope.dropdownParse.subjects)).length; i++) {
                $scope.allSubjectAvg.push((Object.keys($scope.dropdownParse.subjects))[i]);
            }
            console.log($scope.allSubjectAvg);

            /* for(i = 0;i < $scope.marksDetails.length;i++){
             $scope.dupSubjects.push($scope.marksDetails[i].subject);
             }
             console.log($scope.dupSubjects);

             $.each($scope.dupSubjects, function( i, el ){
             if($.inArray( el, $scope.allSubjectAvg) === -1 ) {
             $scope.allSubjectAvg.push( el );
             }
             });
             console.log($scope.allSubjectAvg);*/
        }

    }
//condtion upper field and push lower field and function lower field
    $scope.getallAcademicYears1 = function (form) {
        $scope.allAcademicYears = [];
        $scope.allAcademicYearsdup = [];
        //$scope.dupacademicYear = [];

        var courseJson = JSON.parse(form.allCoursesAvg)


        if (Array.isArray(courseJson)) {
            for (j = 0; j < courseJson.length; j++) {
                var course = courseJson[j]
                //alert("acadmic: "+ acadmic)
                for (i = 0; i < (Object.keys($scope.dropdownParse.courses[course])).length; i++) {
                    $scope.allAcademicYearsdup.push((Object.keys($scope.dropdownParse.courses[course]))[i]);
                }
            }
        }
        else {
            //alert("acadmic: "+ acadmic)
            for (i = 0; i < (Object.keys($scope.dropdownParse.courses[courseJson])).length; i++) {
                $scope.allAcademicYearsdup.push((Object.keys($scope.dropdownParse.courses[courseJson]))[i]);
            }
        }

        //alert(Object.keys($scope.dropdownParse.courses[course]))
        /*for(i = 0;i < (Object.keys($scope.dropdownParse.courses[course])).length; i++)
         {
         $scope.allAcademicYears.push((Object.keys($scope.dropdownParse.courses[course]))[i]);
         }
         console.log($scope.allAcademicYears);*/

        /*for (i = 0; i < $scope.orgCourseDetails.length; i++) {
         // alert("Hiii")
         //alert(form.allCoursesAvg)
         if ( form.allCoursesAvg == $scope.orgCourseDetails[i].courseName ) {
         // alert("same: " + $scope.orgCourseDetails[i].courseName)
         //alert($scope.orgCourseDetails[i].academicYear)
         $scope.dupacademicYear.push($scope.orgCourseDetails[i].academicYear);
         }

         }*/
        $.each($scope.allAcademicYearsdup, function (i, el) {
            if ($.inArray(el, $scope.allAcademicYears) === -1) {
                $scope.allAcademicYears.push(el);
            }
        });
       // alert($scope.allAcademicYears)

    }

    $scope.getAllSemesterAvg = function (form) {
        $scope.dupSemesters = [];
        $scope.allSemesters = [];
        // alert(form.allAcademicYears);

        //alert("hi")
        var courseJson = JSON.parse(form.allCoursesAvg);
        var academicJson = JSON.parse(form.allAcademicYears);
        //alert(courseJson)
        //alert(academicJson)
        //alert(Object.keys($scope.dropdownParse.courses[course][academic]))


        if (Array.isArray(courseJson)) {
            for (i = 0; i < courseJson.length; i++) {
                var course = courseJson[i]
                //alert("course: " + course)
                if (Array.isArray(academicJson)) {
                    for (j = 0; j < academicJson.length; j++) {
                        var academic = academicJson[j]
                        //alert("academic: "+ academic)
                        for (k = 0; k < (Object.keys($scope.dropdownParse.courses[course][academic])).length; k++) {
                            $scope.dupSemesters.push((Object.keys($scope.dropdownParse.courses[course][academic]))[k]);
                        }
                    }
                }
                else {
                    for (k = 0; k < (Object.keys($scope.dropdownParse.courses[course][academicJson])).length; k++) {
                        $scope.dupSemesters.push((Object.keys($scope.dropdownParse.courses[course][academicJson]))[k]);
                    }
                }
            }
        }
        else {
            if (Array.isArray(academicJson)) {
                for (j = 0; j < academicJson.length; j++) {
                    var academic = academicJson[j]
                    //alert("academic: "+ academic)
                    for (k = 0; k < (Object.keys($scope.dropdownParse.courses[courseJson][academic])).length; k++) {
                        $scope.dupSemesters.push((Object.keys($scope.dropdownParse.courses[courseJson][academic]))[k]);
                    }
                }
            }
            else {
                for (k = 0; k < (Object.keys($scope.dropdownParse.courses[courseJson][academicJson])).length; k++) {
                    $scope.dupSemesters.push((Object.keys($scope.dropdownParse.courses[courseJson][academicJson]))[k]);
                }
            }
        }


        /* for(i = 0;i < (Object.keys($scope.dropdownParse.courses[course][academic])).length; i++)
         {
         $scope.allSemesters.push((Object.keys($scope.dropdownParse.courses[course][academic]))[i]);
         }
         console.log($scope.allSemesters);*/

        /*for (i = 0; i < $scope.orgCourseDetails.length; i++) {
         if ( form.allAcademicYears == $scope.orgCourseDetails[i].academicYear ) {
         //alert("same: " + $scope.orgCourseDetails[i].academicYear);
         $scope.dupSemesters.push($scope.orgCourseDetails[i].totalSemesters);
         }
         }*/
        $.each($scope.dupSemesters, function (i, el) {
            if ($.inArray(el, $scope.allSemesters) === -1) {
                $scope.allSemesters.push(el);
            }
        });
        //alert($scope.allSemesters)
    }
    $scope.getAllSubjectAvg = function (form) {
        $scope.dupSubjects = [];
        $scope.allSubjectAvg = [];
        var courseJsoN = JSON.parse(form.allCoursesAvg);
        var academicJsoN = JSON.parse(form.allAcademicYears);
        var semesterJsoN = JSON.parse(form.allSemesters)


        if (Array.isArray(courseJsoN)) {
            for (i = 0; i < courseJsoN.length; i++) {
                var course = courseJsoN[i]
                if (Array.isArray(academicJsoN)) {
                    for (j = 0; j < academicJsoN.length; j++) {
                        var academic = academicJsoN[j]
                        //alert("coures: " + coures)
                        if (Array.isArray(semesterJsoN)) {
                            for (k = 0; k < semesterJsoN.length; k++) {
                                var semester = semesterJsoN[k]
                                //alert("semester: " + semester)
                                for (l = 0; l < ($scope.dropdownParse.courses[course][academic][semester]).length; l++) {
                                    $scope.dupSubjects.push(($scope.dropdownParse.courses[course][academic][semester])[l]);
                                }
                            }
                        }
                        else {
                            for (l = 0; l < ($scope.dropdownParse.courses[course][academic][semesterJsoN]).length; l++) {
                                $scope.dupSubjects.push(($scope.dropdownParse.courses[course][academic][semesterJsoN])[l]);
                            }
                        }
                    }
                }
                else {
                    if (Array.isArray(semesterJsoN)) {
                        for (k = 0; k < semesterJsoN.length; k++) {
                            var semester = semesterJsoN[k]
                            //alert("semester: " + semester)
                            for (l = 0; l < ($scope.dropdownParse.courses[course][academicJsoN][semester]).length; l++) {
                                $scope.dupSubjects.push(($scope.dropdownParse.courses[course][academicJsoN][semester])[l]);
                            }
                        }
                    }
                    else {
                        for (l = 0; l < ($scope.dropdownParse.courses[course][academicJsoN][semesterJsoN]).length; l++) {
                            $scope.dupSubjects.push(($scope.dropdownParse.courses[course][academicJsoN][semesterJsoN])[l]);
                        }
                    }
                }

            }
        }
        else {
            if (Array.isArray(academicJsoN)) {
                for (j = 0; j < academicJsoN.length; j++) {
                    var coures = academicJsoN[j]
                    //alert("coures: " + coures)
                    if (Array.isArray(semesterJsoN)) {
                        for (k = 0; k < semesterJsoN.length; k++) {
                            var semester = semesterJsoN[k]
                            //alert("semester: " + semester)
                            for (l = 0; l < ($scope.dropdownParse.courses[courseJsoN][coures][semester]).length; l++) {
                                $scope.dupSubjects.push(($scope.dropdownParse.courses[courseJsoN][coures][semester])[l]);
                            }
                        }
                    }
                    else {
                        for (l = 0; l < ($scope.dropdownParse.courses[courseJsoN][coures][semesterJsoN]).length; l++) {
                            $scope.dupSubjects.push(($scope.dropdownParse.courses[courseJsoN][coures][semesterJsoN])[l]);
                        }
                    }
                }
            }
            else {
                if (Array.isArray(semesterJsoN)) {
                    for (k = 0; k < semesterJsoN.length; k++) {
                        var semester = semesterJsoN[k]
                        //alert("semester: " + semester)
                        for (l = 0; l < ($scope.dropdownParse.courses[courseJsoN][academicJsoN][semester]).length; l++) {
                            $scope.dupSubjects.push(($scope.dropdownParse.courses[courseJsoN][academicJsoN][semester])[l]);
                        }
                    }
                }
                else {
                    for (l = 0; l < ($scope.dropdownParse.courses[courseJsoN][academicJsoN][semesterJsoN]).length; l++) {
                        $scope.dupSubjects.push(($scope.dropdownParse.courses[courseJsoN][academicJsoN][semesterJsoN])[l]);
                    }
                }
            }
        }


        /* for(i = 0;i < $scope.dropdownParse.courses[course][academic][semester].length; i++)
         {
         $scope.Subjects.push($scope.dropdownParse.courses[course][academic][semester][i]);
         }
         //$scope.allSubjectAvg.push($scope.Subjects);
         for(i = 0;i < $scope.dropdownParse.courses[course][academic][semester].length; i++)
         {
         $scope.allSubjectAvg.push($scope.dropdownParse.courses[course][academic][semester][i]);
         }
         console.log("$scope.allSubjectAvg: " + $scope.allSubjectAvg);*/

        /*//alert(form.allSemesters);
         for(i = 0;i < $scope.marksDetails.length;i++) {
         //alert($scope.orgCourseDetails[i].totalSemesters)
         if ( form.allSemesters == $scope.orgCourseDetails[i].totalSemesters) {
         //alert("same: " + $scope.orgCourseDetails[i].totalSemesters)
         $scope.dupSubjects.push($scope.marksDetails[i].subject);
         }
         }*/
        $.each($scope.dupSubjects, function (i, el) {
            if ($.inArray(el, $scope.allSubjectAvg) === -1) {
                $scope.allSubjectAvg.push(el);
            }
        });
        //alert($scope.allSubjectAvg)
    }
//condtion upper field and push lower field and function lower field
    //if academicyears in x-axis
    $scope.getAllCoursesFromAcad1 = function (form) {

        $scope.allCoursesAvg = [];
        $scope.allCoursesAvgdup = [];
        //alert( "Hi:" + JSON.parse(form.allAcademicYears))
        var allAcademicYearsJson = JSON.parse(form.allAcademicYears)

        if (Array.isArray(JSON.parse($scope.form.allAcademicYears))) {
            for (j = 0; j < allAcademicYearsJson.length; j++) {
                var acadmic = allAcademicYearsJson[j]
                //alert("acadmic: "+ acadmic)
                for (i = 0; i < (Object.keys($scope.dropdownParse.acc_year[acadmic])).length; i++) {
                    $scope.allCoursesAvgdup.push((Object.keys($scope.dropdownParse.acc_year[acadmic]))[i]);
                }
            }
        }
        else {
            var acadmic = JSON.parse(form.allAcademicYears)
            //alert("acadmic: "+ acadmic)
            for (i = 0; i < (Object.keys($scope.dropdownParse.acc_year[acadmic])).length; i++) {
                $scope.allCoursesAvgdup.push((Object.keys($scope.dropdownParse.acc_year[acadmic]))[i]);
            }
        }


        //alert(Object.keys($scope.dropdownParse.courses[course]))

        //alert($scope.allCoursesAvgdup);

        /*for(i = 0;i < $scope.orgCourseDetails.length;i++){
         //alert($scope.orgCourseDetails[i].academicYear)
         if ( form.allAcademicYears == $scope.orgCourseDetails[i].academicYear ) {
         //alert( "same: " + $scope.orgCourseDetails[i].academicYear )
         $scope.dupCourses.push($scope.orgCourseDetails[i].courseName);
         }

         }*/
        $.each($scope.allCoursesAvgdup, function (i, el) {
            if ($.inArray(el, $scope.allCoursesAvg) === -1) {
                $scope.allCoursesAvg.push(el);
            }
        });
      //  alert($scope.allCoursesAvg);
    }

    $scope.getAllSemesterFromCoures = function (form) {

        $scope.dupSemesters = [];
        $scope.allSemesters = [];
        //alert(form.allCoursesAvg);

        var acadmicYearsJson = JSON.parse(form.allAcademicYears)
        var couresJson = JSON.parse(form.allCoursesAvg);

        if (Array.isArray(JSON.parse($scope.form.allAcademicYears))) {
            for (i = 0; i < acadmicYearsJson.length; i++) {
                var acadmic = acadmicYearsJson[i]
            //    alert("acadmic: " + acadmic)
                if (Array.isArray(JSON.parse(form.allCoursesAvg))) {
                    for (j = 0; j < couresJson.length; j++) {
                        var coures = couresJson[j]
                   //     alert("coures: " + coures)
                        for (k = 0; k < (Object.keys($scope.dropdownParse.acc_year[acadmic][coures])).length; k++) {
                            $scope.dupSemesters.push((Object.keys($scope.dropdownParse.acc_year[acadmic][coures]))[k]);
                        }
                    }
                }
                else {
                    for (k = 0; k < (Object.keys($scope.dropdownParse.acc_year[acadmic][couresJson])).length; k++) {
                        $scope.dupSemesters.push((Object.keys($scope.dropdownParse.acc_year[acadmic][couresJson]))[k]);
                    }
                }
            }
        }
        else {
            if (Array.isArray(JSON.parse(form.allCoursesAvg))) {
                for (j = 0; j < couresJson.length; j++) {
                    var coures = couresJson[j]
               //     alert("coures: " + coures)
                    for (k = 0; k < (Object.keys($scope.dropdownParse.acc_year[acadmicYearsJson][coures])).length; k++) {
                        $scope.dupSemesters.push((Object.keys($scope.dropdownParse.acc_year[acadmicYearsJson][coures]))[k]);
                    }
                }
            }
            else {
                for (k = 0; k < (Object.keys($scope.dropdownParse.acc_year[acadmicYearsJson][couresJson])).length; k++) {
                    $scope.dupSemesters.push((Object.keys($scope.dropdownParse.acc_year[acadmicYearsJson][couresJson]))[k]);
                }
            }
        }



        $.each($scope.dupSemesters, function (i, el) {
            if ($.inArray(el, $scope.allSemesters) === -1) {
                $scope.allSemesters.push(el);
            }
        });
       // alert($scope.allSemesters);
    }

    $scope.getAllSubjectFromSemester = function (form) {

        $scope.dupSubjects = [];
        $scope.allSubjectAvg = [];
        //alert(form.allSemesters);

        var acadmicYearsJson = JSON.parse(form.allAcademicYears)
        var couresJson = JSON.parse(form.allCoursesAvg);
        var semesterJson = JSON.parse(form.allSemesters)

        if (Array.isArray(acadmicYearsJson)) {
            for (i = 0; i < acadmicYearsJson.length; i++) {
                var acadmic = acadmicYearsJson[i]
                if (Array.isArray(couresJson)) {
                    for (j = 0; j < couresJson.length; j++) {
                        var coures = couresJson[j]
                        //alert("coures: " + coures)
                        if (Array.isArray(semesterJson)) {
                            for (k = 0; k < semesterJson.length; k++) {
                                var semester = semesterJson[k]
                                //alert("semester: " + semester)
                                for (l = 0; l < ($scope.dropdownParse.acc_year[acadmic][coures][semester]).length; l++) {
                                    $scope.dupSubjects.push(($scope.dropdownParse.acc_year[acadmic][coures][semester])[l]);
                                }
                            }
                        }
                        else {
                            for (l = 0; l < ($scope.dropdownParse.acc_year[acadmic][coures][semesterJson]).length; l++) {
                                $scope.dupSubjects.push(($scope.dropdownParse.acc_year[acadmic][coures][semesterJson])[l]);
                            }
                        }
                    }
                }
                else {
                    if (Array.isArray(semesterJson)) {
                        for (k = 0; k < semesterJson.length; k++) {
                            var semester = semesterJson[k]
                            //alert("semester: " + semester)
                            for (l = 0; l < ($scope.dropdownParse.acc_year[acadmic][couresJson][semester]).length; l++) {
                                $scope.dupSubjects.push(($scope.dropdownParse.acc_year[acadmic][couresJson][semester])[l]);
                            }
                        }
                    }
                    else {
                        for (l = 0; l < ($scope.dropdownParse.acc_year[acadmic][couresJson][semesterJson]).length; l++) {
                            $scope.dupSubjects.push(($scope.dropdownParse.acc_year[acadmic][couresJson][semesterJson])[l]);
                        }
                    }
                }

            }
        }
        else {
            if (Array.isArray(couresJson)) {
                for (j = 0; j < couresJson.length; j++) {
                    var coures = couresJson[j]
                    //alert("coures: " + coures)
                    if (Array.isArray(semesterJson)) {
                        for (k = 0; k < semesterJson.length; k++) {
                            var semester = semesterJson[k]
                            //alert("semester: " + semester)
                            for (l = 0; l < ($scope.dropdownParse.acc_year[acadmicYearsJson][coures][semester]).length; l++) {
                                $scope.dupSubjects.push(($scope.dropdownParse.acc_year[acadmicYearsJson][coures][semester])[l]);
                            }
                        }
                    }
                    else {
                        for (l = 0; l < ($scope.dropdownParse.acc_year[acadmicYearsJson][coures][semesterJson]).length; l++) {
                            $scope.dupSubjects.push(($scope.dropdownParse.acc_year[acadmicYearsJson][coures][semesterJson])[l]);
                        }
                    }
                }
            }
            else {
                if (Array.isArray(semesterJson)) {
                    for (k = 0; k < semesterJson.length; k++) {
                        var semester = semesterJson[k]
                        //alert("semester: " + semester)
                        for (l = 0; l < ($scope.dropdownParse.acc_year[acadmicYearsJson][couresJson][semester]).length; l++) {
                            $scope.dupSubjects.push(($scope.dropdownParse.acc_year[acadmicYearsJson][couresJson][semester])[l]);
                        }
                    }
                }
                else {
                    for (l = 0; l < ($scope.dropdownParse.acc_year[acadmicYearsJson][couresJson][semesterJson]).length; l++) {
                        $scope.dupSubjects.push(($scope.dropdownParse.acc_year[acadmicYearsJson][couresJson][semesterJson])[l]);
                    }
                }
            }
        }



        console.log($scope.dupSubjects);
        $.each($scope.dupSubjects, function (i, el) {
            if ($.inArray(el, $scope.allSubjectAvg) === -1) {
                $scope.allSubjectAvg.push(el);
            }
        });

    }


    $scope.getallAcademicFromSemester = function (form) {
//        alert("hi " + form.allSemesters)
        $scope.allAcademicYears = [];
        $scope.dupacademicYear = [];
        //$scope.dupacademicYear = [];
        var semesterJson = JSON.parse(form.allSemesters)
        if (Array.isArray(semesterJson)) {
            for (j = 0; j < semesterJson.length; j++) {
                var semester = semesterJson[j]
                //alert("acadmic: "+ acadmic)
                for (i = 0; i < (Object.keys($scope.dropdownParse.semesters[semester])).length; i++) {
                    $scope.dupacademicYear.push((Object.keys($scope.dropdownParse.semesters[semester]))[i]);
                }
            }
        }
        else {
            for (i = 0; i < (Object.keys($scope.dropdownParse.semesters[semesterJson])).length; i++) {
                $scope.dupacademicYear.push((Object.keys($scope.dropdownParse.semesters[semesterJson]))[i]);
            }
        }
        $.each($scope.dupacademicYear, function (i, el) {
            if ($.inArray(el, $scope.allAcademicYears) === -1) {
                $scope.allAcademicYears.push(el);
            }
        });

    }


    $scope.getAllCoursesFromAcad = function (form) {

        $scope.dupCourses = [];
        $scope.allCoursesAvg = [];


        var semesterJson = JSON.parse(form.allSemesters);
        var acadmicJson = JSON.parse(form.allAcademicYears)


        if (Array.isArray(semesterJson)) {
            for (i = 0; i < semesterJson.length; i++) {
                var semester = semesterJson[i]
                //alert("semester: " + semester)
                if (Array.isArray(acadmicJson)) {
                    for (j = 0; j < acadmicJson.length; j++) {
                        var acadmic = acadmicJson[j]
                        //alert("acadmic: "+ acadmic)
                        for (k = 0; k < (Object.keys($scope.dropdownParse.semesters[semester][acadmic])).length; k++) {
                            $scope.dupCourses.push((Object.keys($scope.dropdownParse.semesters[semester][acadmic]))[k]);
                        }
                    }
                }
                else {
                    for (k = 0; k < (Object.keys($scope.dropdownParse.semesters[semester][acadmicJson])).length; k++) {
                        $scope.dupCourses.push((Object.keys($scope.dropdownParse.semesters[semester][acadmicJson]))[k]);
                    }
                }
            }
        }
        else {
            if (Array.isArray(acadmicJson)) {
                for (j = 0; j < acadmicJson.length; j++) {
                    var acadmic = acadmicJson[j]
                    //alert("acadmic: "+ acadmic)
                    for (k = 0; k < (Object.keys($scope.dropdownParse.semesters[semesterJson][acadmic])).length; k++) {
                        $scope.dupCourses.push((Object.keys($scope.dropdownParse.semesters[semesterJson][acadmic]))[k]);
                    }
                }
            }
            else {
                for (k = 0; k < (Object.keys($scope.dropdownParse.semesters[semesterJson][acadmicJson])).length; k++) {
                    $scope.dupCourses.push((Object.keys($scope.dropdownParse.semesters[semesterJson][acadmicJson]))[k]);
                }
            }
        }


        $.each($scope.dupCourses, function (i, el) {
            if ($.inArray(el, $scope.allCoursesAvg) === -1) {
                $scope.allCoursesAvg.push(el);
            }
        });
        //alert($scope.allCoursesAvg)
    }



    $scope.getAllSubjectFromCourse = function (form) {

        //$scope.dupSemesters = [];
        $scope.dupSubjects = [];
        $scope.allSubjectAvg = [];
        //alert(form.allSubjectAvg);

        var semesterJson = JSON.parse(form.allSemesters);
        var acadmicJson = JSON.parse(form.allAcademicYears);
        var couresJson = JSON.parse(form.allCoursesAvg);

        if (Array.isArray(semesterJson)) {
            for (i = 0; i < semesterJson.length; i++) {
                var semester = semesterJson[i]
                if (Array.isArray(acadmicJson)) {
                    for (j = 0; j < acadmicJson.length; j++) {
                        var acadmic = acadmicJson[j]
                        //alert("acadmic: " + acadmic)
                        if (Array.isArray(couresJson)) {
                            for (k = 0; k < couresJson.length; k++) {
                                var coures = couresJson[k]
                                //alert("semester: " + semester)
                                for (l = 0; l < ($scope.dropdownParse.semesters[semester][acadmic][coures]).length; l++) {
                                    $scope.dupSubjects.push(($scope.dropdownParse.semesters[semester][acadmic][coures])[l]);
                                }
                            }
                        }
                        else {
                            for (l = 0; l < ($scope.dropdownParse.semesters[semester][acadmic][couresJson]).length; l++) {
                                $scope.dupSubjects.push(($scope.dropdownParse.semesters[semester][acadmic][couresJson])[l]);
                            }
                        }
                    }
                }
                else {
                    if (Array.isArray(couresJson)) {
                        for (k = 0; k < couresJson.length; k++) {
                            var coures = couresJson[k]
                            //alert("semester: " + semester)
                            for (l = 0; l < ($scope.dropdownParse.semesters[semester][acadmicJson][coures]).length; l++) {
                                $scope.dupSubjects.push(($scope.dropdownParse.semesters[semester][acadmicJson][coures])[l]);
                            }
                        }
                    }
                    else {
                        for (l = 0; l < ($scope.dropdownParse.semesters[semester][acadmicJson][couresJson]).length; l++) {
                            $scope.dupSubjects.push(($scope.dropdownParse.semesters[semester][acadmicJson][couresJson])[l]);
                            //alert("ajaa")
                        }
                    }
                }

            }
        }
        else {
            if (Array.isArray(acadmicJson)) {
                for (j = 0; j < acadmicJson.length; j++) {
                    var acadmic = acadmicJson[j]
                    //alert("coures: " + coures)
                    if (Array.isArray(couresJson)) {
                        for (k = 0; k < couresJson.length; k++) {
                            var coures = couresJson[k]
                            //alert("semester: " + semester)
                            for (l = 0; l < ($scope.dropdownParse.semesters[semesterJson][acadmic][coures]).length; l++) {
                                $scope.dupSubjects.push(($scope.dropdownParse.semesters[semesterJson][acadmic][coures])[l]);
                            }
                        }
                    }
                    else {
                        for (l = 0; l < ($scope.dropdownParse.semesters[semesterJson][acadmic][couresJson]).length; l++) {
                            $scope.dupSubjects.push(($scope.dropdownParse.semesters[semesterJson][acadmic][couresJson])[l]);
                        }
                    }
                }
            }
            else {
                if (Array.isArray(couresJson)) {
                    for (k = 0; k < couresJson.length; k++) {
                        var coures = couresJson[k]
                        //alert("semester: " + semester)
                        for (l = 0; l < ($scope.dropdownParse.semesters[semesterJson][acadmicJson][coures]).length; l++) {
                            $scope.dupSubjects.push(($scope.dropdownParse.semesters[semesterJson][acadmicJson][coures])[l]);
                        }
                    }
                }
                else {
                    for (l = 0; l < ($scope.dropdownParse.semesters[semesterJson][acadmicJson][couresJson]).length; l++) {
                        $scope.dupSubjects.push(($scope.dropdownParse.semesters[semesterJson][acadmicJson][couresJson])[l]);

                    }
                }
            }
        }

        $.each($scope.dupSubjects, function (i, el) {
            if ($.inArray(el, $scope.allSubjectAvg) === -1) {
                $scope.allSubjectAvg.push(el);
            }
        });

    }




    $scope.remove = function (ind, type,name) {

        $('#deleteConfirmation').modal("show");
        $scope.No = function () {
            $('#deleteConfirmation').modal("hide");
        }

        $scope.Yes = function () {
            console.log(ind);
            //calling Ajax call to remove payload form charts array for the graph
            $scope.data = {
                "orgId": $scope.organId,
                "chartType": $scope.form.chart,
                "WidgetName": name,
            };
//            alert(JSON.stringify($scope.data));
            console.log($scope.data);
            $http({
                method: 'POST',
                url: '/deleteWidget',
                data: $scope.data,
                headers: {'Content-Type': 'application/json'}
            }).then(function mySucces(response) {
  //              alert("Got Response!");
                $scope.myWelcome = {};
                $scope.myWelcome = response.data;
                console.log(response.data);
                $scope.graphArray=[];
                $scope.onload();
                if ($scope.myWelcome.status == "Success") {
                    // alert("Delete done")

                }
                else {
    //                alert("not deleted!");

                }

            }, function myError(response) {
                //alert("Erorr");
                $scope.myWelcome = response.statusText;
                //alert($scope.myWelcome);
            });
        }


    };


    $scope.piecount = -1;
    $scope.linecount = -1;
    $scope.areacount = -1;
    $scope.barcount = -1;

    $scope.graph = function () {
        //alert("hiii");
        //  $scope.onloadtable = true;
        $scope.impbtn = false;
        $scope.widGraph = true;
        $scope.para = false;

        //alert($scope.form.xaxis);


        //var values = []
        $scope.areaChartData = [];
        $scope.piearray = [];
        $scope.subjects = [];
        console.log("why a: " + $scope.a);
        console.log("why b: " + $scope.b);
        var a = $scope.a;
        var b = $scope.b;

        console.log("a" + values[a]);
        for (var i = 0; i < values[a].length; i++) {


            $scope.subjects[i] = {
                "x": values[a][i],
                "y": values1[b][i]
            }
            $scope.piearray[i] = {
                "key": values[a][i],
                "y": values1[b][i]
            }

            $scope.areaChartData.push(new Array(values[a][i], values1[b][i]));


        }

        $scope.subjectdata = $scope.subjects;
      //  alert("TYPE "+$scope.form.chart)
        if ($scope.form.chart == "AreaChart") {

            //$scope.areawidget.push($scope.form.widget);
            $scope.areacount = $scope.areacount + 1;
            $scope.areashow = true;
            if ($scope.linecount < 0) {
                $scope.lineshow = false;
            } else {
                $scope.lineshow = true;
            }

            if ($scope.piecount < 0) {
                $scope.pieshow = false;
            } else {
                $scope.pieshow = true;
            }
            $scope.areawidget[$scope.areacount] = $scope.form.widget;
            $scope.tempValue=[];
            $scope.templabel=[];
            for(i=0;i<$scope.areaChartData.length;i++) {
                $scope.tempValue.push([i+1,$scope.areaChartData[i][1]]);
                $scope.templabel.push($scope.areaChartData[i][0]);

            }
            $scope.optionsarea = {
                chart: {
                    type: 'stackedAreaChart',
                    height: 450,
                    margin : {
                        top: 20,
                        right: 20,
                        bottom: 30,
                        left: 40
                    },
                    x: function(d){return d[0];},
                    y: function(d){return d[1];},
                    useVoronoi: false,
                    clipEdge: true,
                    duration: 100,
                    useInteractiveGuideline: true,
                    xAxis: {
                        showMaxMin: false,
                        tickFormat: function(d,i) {

                            return d3.format(',.2f')(d);
                        }
                    },
                    yAxis: {
                        tickFormat: function(d){
                            return d3.format(',.2f')(d);
                        }
                    },
                    zoom: {
                        enabled: true,
                        scaleExtent: [1, 10],
                        useFixedDomain: false,
                        useNiceScale: false,
                        horizontalOff: false,
                        verticalOff: true,
                        unzoomEventType: 'dblclick.zoom'
                    }
                }
            };


            var keyLabel1 = $scope.form.xaxis + " Vs " + $scope.form.yaxis;
            console.log("$scope.areaChartData" + $scope.areaChartData);

        //    alert(JSON.stringify($scope.tempValue));
         //   alert($scope.areacount);
            $scope.dataBRAsset[$scope.areacount] = [];
            if ($scope.form.xaxis == "AcademicYears") {

                $scope.dataBRAsset[$scope.areacount].push({
                    "key": keyLabel1,
                    "values": $scope.tempValue,
                    "label": $scope.templabel

                });
            } else if ($scope.form.xaxis == "Semesters") {
                $scope.dataBRAsset[$scope.areacount].push({
                    "key": keyLabel1,
                    "values": $scope.tempValue,
                    "label": $scope.templabel
                });
            } else if ($scope.form.xaxis == "Courses") {
                $scope.dataBRAsset[$scope.areacount].push({
                    "key": keyLabel1,
                    "values": $scope.tempValue,
                    "label": $scope.templabel
                });
            } else if ($scope.form.xaxis == "Subjects") {
                $scope.dataBRAsset[$scope.areacount].push({
                    "key": keyLabel1,
                    "values": $scope.tempValue,
                    "label": $scope.templabel
                });
            }

            $scope.graphArray.push({
                wid: $scope.areawidget[$scope.areacount],
                type: 'AreaChart',
                options: $scope.optionsarea,
                data: $scope.dataBRAsset[$scope.areacount]
            });
            console.log($scope.graphArray);
        }
        if ($scope.form.chart == "BarChart") {
//alert("bar");
            //$scope.linewidget.push($scope.form.widget);
            $scope.barcount = $scope.barcount + 1;
            $scope.barshow = true;
            if ($scope.areacount < 0) {
                $scope.areashow = false;
            } else {
                $scope.areashow = true;
            }
            if ($scope.linecount < 0) {
                $scope.lineshow = false;
            } else {
                $scope.lineshow = true;
            }
            if ($scope.piecount < 0) {
                $scope.pieshow = false;
            } else {
                $scope.pieshow = true;
            }
         //   alert(JSON.stringify($scope.subjects));

            $scope.barwidget[$scope.barcount] = $scope.form.widget;

           // alert(JSON.stringify($scope.subjects));
            $scope.tempValue=[];
            $scope.templabel=[];
            for(i=0;i<$scope.subjects.length;i++) {
                $scope.tempValue.push({"label":String($scope.areaChartData[i][0]),"value":$scope.areaChartData[i][1]});


            }
            //alert("atart")
            $scope.bar2 = {
                chart: {
                    type: 'multiBarChart',
                    height: 450,
                    margin : {
                        top: 20,
                        right: 20,
                        bottom: 30,
                        left: 40
                    },


                    reduceXTicks: false,



                    x: function(d){return d.label;},
                    y: function(d){return d.value;},
                    //showValues: true,


                },
                // duration: 500,
                xAxis: {
                    axisLabel: 'Technology',
                    showMaxMin: false,
                    rotateLabels: 20,
                    axisLabelDistance: 60,

                },
                yAxis: {
                    axisLabel: 'Ranks',
                    axisLabelDistance: 10,

                }
            }
          //  alert("end")
            var keyLabel = $scope.form.xaxis + " Vs " + $scope.form.yaxis;

          //  alert(JSON.stringify($scope.subjects));
            if ($scope.form.xaxis == "AcademicYears") {
                $scope.subDataObj = [{
                    values: $scope.tempValue, // values - represents the
                    key: keyLabel, // key - the name of the series.
                    color: "rgb( 6, 140, 53 )" // color - optional: choose your own

                }

                ];
            } else if ($scope.form.xaxis == "Semesters") {
                $scope.subDataObj = [{
                    values: $scope.tempValue, // values - represents the
                    key: keyLabel, // key - the name of the series.
                    color: "rgb( 241, 102, 35)" // color - optional: choose your own

                }

                ];
            } else if ($scope.form.xaxis == "Courses") {
                $scope.subDataObj = [{
                    values: $scope.tempValue, // values - represents the
                    key: keyLabel, // key - the name of the series.
                    color: "rgb(31, 119, 180)" // color - optional: choose your own

                }

                ];
            } else if ($scope.form.xaxis == "Subjects") {
                $scope.subDataObj = [{
                    values: $scope.tempValue, // values - represents the
                    key: keyLabel, // key - the name of the series.
                    color: "rgb(255,165,0)" // color - optional: choose your own

                }

                ];
            }


            $scope.dataBRAssetBar[$scope.barcount] = $scope.subDataObj;
         //   alert(JSON.stringify( $scope.subDataObj));
            //alert(JSON.stringify( $scope.dataBRAssetLine[$scope.linecount]));
            $scope.graphArray.push({
                wid: $scope.barwidget[$scope.barcount],
                type: 'BarChart',
                options: $scope.bar2,
                data: $scope.dataBRAssetBar[$scope.barcount]
            });
            console.log($scope.graphArray);
           // alert($scope.chart);
        }
        if ($scope.form.chart == "LineChart") {
//alert("line");
            //$scope.linewidget.push($scope.form.widget);
            $scope.linecount = $scope.linecount + 1;
            $scope.lineshow = true;
            if ($scope.areacount < 0) {
                $scope.areashow = false;
            } else {
                $scope.areashow = true;
            }

            if ($scope.piecount < 0) {
                $scope.pieshow = false;
            } else {
                $scope.pieshow = true;
            }

            $scope.getLineChartCount = function (lc) {

                return new Array(lc);
            }
            $scope.linewidget[$scope.linecount] = $scope.form.widget;

          //  alert(JSON.stringify($scope.subjects));
            $scope.tempValue=[];
            $scope.templabel=[];
            for(i=0;i<$scope.subjects.length;i++) {
                $scope.tempValue.push({"x":i+1,"y":$scope.areaChartData[i][1]});
                $scope.templabel.push($scope.areaChartData[i][0]);

            }
            $scope.line = {
                chart: {
                    zoom: {},
                    type: 'lineChart',
                    height: 420,
                    margin: {
                        top: 20,
                        right: 20,
                        bottom: 40,
                        left: 55
                    },
                    x: function (d) {
                        return String(d.x);
                    },
                    y: function (d) {
                        return d.y;
                    },
                    useInteractiveGuideline: true,
                    dispatch: {

                        stateChange: function (e) {
                            console.log("stateChange");
                        },
                        changeState: function (e) {
                            console.log("changeState");
                        },
                        tooltipShow: function (e) {
                            console.log("tooltipShow");
                        },
                        tooltipHide: function (e) {
                            console.log("tooltipHide");
                        }
                    },
                    xAxis: {
                        axisLabel: $scope.form.xaxis
                    },
                    yAxis: {
                        axisLabel: $scope.form.yaxis,
                        tickFormat: function (d) {
                            return d3.format('.02f')(d);
                        },
                        axisLabelDistance: 35
                    },
                    callback: function (chart) {
                        console.log("!!! lineChart callback !!!");
                    }

                },
                title: {
                    enable: true,
                    text: ""
                },
            };
            var keyLabel = $scope.form.xaxis + " Vs " + $scope.form.yaxis;

          //  alert(JSON.stringify($scope.subjects));
            if ($scope.form.xaxis == "AcademicYears") {
                $scope.subDataObj = [{
                    values: $scope.tempValue, // values - represents the
                    key: keyLabel, // key - the name of the series.
                    color: "rgb( 6, 140, 53 )", // color - optional: choose your own
                    strokeWidth: 3
                }

                ];
            } else if ($scope.form.xaxis == "Semesters") {
                $scope.subDataObj = [{
                    values: $scope.tempValue, // values - represents the
                    key: keyLabel, // key - the name of the series.
                    color: "rgb( 241, 102, 35)", // color - optional: choose your own
                    strokeWidth: 3
                }

                ];
            } else if ($scope.form.xaxis == "Courses") {
                $scope.subDataObj = [{
                    values: $scope.tempValue, // values - represents the
                    key: keyLabel, // key - the name of the series.
                    color: "rgb(31, 119, 180)", // color - optional: choose your own
                    strokeWidth: 3
                }

                ];
            } else if ($scope.form.xaxis == "Subjects") {
                $scope.subDataObj = [{
                    values: $scope.tempValue, // values - represents the
                    key: keyLabel, // key - the name of the series.
                    color: "rgb(255,165,0)", // color - optional: choose your own
                    strokeWidth: 3
                }

                ];
            }


            $scope.dataBRAssetLine[$scope.linecount] = $scope.subDataObj;
            //alert(JSON.stringify( $scope.subDataObj));
            //alert(JSON.stringify( $scope.dataBRAssetLine[$scope.linecount]));
            $scope.graphArray.push({
                wid: $scope.linewidget[$scope.linecount],
                type: 'LineChart',
                options: $scope.line,
                data: $scope.dataBRAssetLine[$scope.linecount]
            });
            console.log($scope.graphArray);
        //alert($scope.chart);
        }

        if ($scope.form.chart == "PieChart") {

            $scope.piecount = $scope.piecount + 1;
            $scope.pieshow = true;
            if ($scope.areacount < 0) {
                $scope.areashow = false;
            } else {
                $scope.areashow = true;
            }

            if ($scope.linecount < 0) {
                $scope.lineshow = false;
            } else {
                $scope.lineshow = true;
            }

            $scope.getNumber = function (pc) {
                return new Array(pc);
            }

            $scope.piewidget[$scope.piecount] = $scope.form.widget;
            $scope.optionsPie = {
                chart: {
                    type: "pieChart",
                    height: 430,
                    x: function (d) {
                        return d.key;
                    },
                    y: function (d) {
                        return d.y;
                    },
                    showLabels: true,
                    duration: 500,
                    labelThreshold: 0.01,
                    labelSunbeamLayout: true,
                    legend: {
                        margin: {
                            top: 5,
                            right: 35,
                            bottom: 5,
                            left: 0
                        }
                    }
                }
            };

            $scope.dataPieChartBR[$scope.piecount] = $scope.piearray;
            /*[ {
             key: "Maths",
             y: 60,
             "color": "rgb( 205, 21, 51 )"
             }, {
             key: "physics",
             y: 70,
             "color": "rgb( 63, 81, 181 )"
             }, {
             key: "chemistry",
             y: 80,
             "color": "rgb( 255, 87, 34 )"
             }, {
             key: "Science",
             y: 100,
             "color": "rgb( 6, 140, 53 )"
             } ];*/
            $scope.graphArray.push({
                wid: $scope.piewidget[$scope.piecount],
                type: 'PieChart',
                options: $scope.optionsPie,
                data: $scope.dataPieChartBR[$scope.piecount]
            });


        }

    }

    $scope.samplefunc = function () {
        $scope.impbtn = false;

        $scope.orgTable = true;
    }
    $scope.fileNameChanged = function (ele) {
        //$scope.csvresult = [];
        //var orgId = "org_1";
        var orgId = $scope.organId;
        var lengthOfCourses = 0;
        var academicYear1 = [];
        var fileName = document.getElementById("fileinput").files[0].name;

        $scope.IsVisible = true;
        $scope.showit = false;
        var files = ele.files;

        var _validFileExtensions = [".csv"];
        if (ele.type == "file") {
            var sFileName = ele.value;
            if (sFileName.length > 0) {
                var blnValid = false;
                var uniqueproperty = false;
                for (var j = 0; j < _validFileExtensions.length; j++) {
                    var sCurExtension = _validFileExtensions[j];
                    if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase()
                        == sCurExtension.toLowerCase()) {
                        blnValid = true;
                        break;
                    }
                }

                if (!blnValid) {


                    //  alert( "Sorry, " + fileName + " is invalid, allowed extensions are: " + _validFileExtensions.join( ", " ) );
                    ele.value = "";
                    return false;
                }
            }
        }

        if (files) {
            var r = new FileReader();
            r.onload = function (e) {

                var contents = e.target.result;
                var lines = contents.split("\n");

                var kpns = [];

                var headers = lines[0].split(",");

                for (var i = 1; i < lines.length; i++) {
                    if (!lines[i] || lines[i] == "") {
                        continue;
                    }
                    var currentline = lines[i].split(",");
                    var obj = {};
                    for (var j = 0; j < headers.length; j++) {
                        obj[headers[j]] = currentline[j];
                    }
                    $scope.csvresult.push(obj);
                    //console.log(JSON.stringify(csvresult))

                }
                console.log(JSON.stringify($scope.csvresult));
                //$scope.dummy = [];

                for (i = 0; i < $scope.csvresult.length; i++) {
                    var index1 = $scope.dummy.map(
                        function (obj) {
                            return obj.courseName;
                        }).indexOf($scope.csvresult[i].courseName);
                    console.log(index1)

                    var index2 = $scope.dummy.map(
                        function (obj) {
                            return obj.academicYear;
                        }).indexOf($scope.csvresult[i].academicYear);

                    console.log(index1)

                    if (index1 == -1 && index2 == -1) {

                        $scope.dummy.push($scope.csvresult[i]);
                    }


                }
                console.log(JSON.stringify($scope.dummy));

//dropdown
                //accYearObj
                var accYearObj = {};
                for (j = 0; j < $scope.dummy.length; j++) {
                    var academicObj = {};
                    for (i = 0; i < $scope.dummy.length; i++) {
                        var courseKey = $scope.dummy[i].courseName;
                        var courseObj = {};
                        for (k = 0; k < $scope.dummy.length; k++) {
                            var semstersKey = $scope.dummy[k].totalSemesters;
                            var subjectList = [];
                            courseObj[semstersKey] = subjectList;
                        }
                        academicObj[courseKey] = courseObj;
                    }
                    console.log(JSON.stringify(academicObj))
                    //key-value
                    var academicKey = $scope.dummy[j].academicYear;
                    accYearObj[academicKey] = academicObj;
                }
                console.log(JSON.stringify(accYearObj))

                //coursesObj
                var coursesObj = {};
                for (j = 0; j < $scope.dummy.length; j++) {
                    var coursesNameObj = {};
                    for (i = 0; i < $scope.dummy.length; i++) {
                        var academicKey = $scope.dummy[i].academicYear;
                        var academicObj = {};
                        for (k = 0; k < $scope.dummy.length; k++) {
                            var semstersKey = $scope.dummy[k].totalSemesters;
                            var subjectList = [];
                            academicObj[semstersKey] = subjectList;
                        }
                        coursesNameObj[academicKey] = academicObj;
                    }
                    console.log(JSON.stringify(coursesNameObj))
                    //key-value
                    var courseKey = $scope.dummy[j].courseName;
                    coursesObj[courseKey] = coursesNameObj;
                }
                console.log(JSON.stringify(coursesObj))

                //semsters totalSemesters
                var semstersObj = {};
                for (j = 0; j < $scope.dummy.length; j++) {
                    var semstersNameObj = {};
                    for (i = 0; i < $scope.dummy.length; i++) {
                        var academicKey = $scope.dummy[i].academicYear;
                        var academicObj = {};
                        for (k = 0; k < $scope.dummy.length; k++) {
                            var coursesKey = $scope.dummy[k].courseName;
                            var subjectList = [];
                            academicObj[coursesKey] = subjectList;
                        }
                        semstersNameObj[academicKey] = academicObj;
                    }
                    console.log(JSON.stringify(semstersNameObj))
                    //key-value
                    var semstersKey = $scope.dummy[j].totalSemesters;
                    semstersObj[semstersKey] = semstersNameObj;

                }
                console.log("semester-- " + JSON.stringify(semstersObj))


                //key-value(acc_year)
                var acc_yearKey = "acc_year";
                $scope.dropdownObj[acc_yearKey] = accYearObj;
                //key-value(courseName)
                var coursesKey = "courses";
                $scope.dropdownObj[coursesKey] = coursesObj;
                //key-value(semesters)
                var semstersKey = "semesters";
                $scope.dropdownObj[semstersKey] = semstersObj;

                console.log("Framed Object: " + JSON.stringify($scope.dropdownObj));
                //stringify
                $scope.dropdownJsonString = JSON.stringify($scope.dropdownObj);


//dropdown end

                //alert(JSON.stringify($scope.dummy));
                //$route.reload();
                var unique = {};
                var academicYear1 = [];
                for (var i in $scope.csvresult) {
                    if (typeof(unique[$scope.csvresult[i].academicYear]) == "undefined") {
                        academicYear1.push($scope.csvresult[i].academicYear);
                    }
                    unique[$scope.csvresult[i].academicYear] = 0;
                }


                console.log(JSON.stringify(academicYear1.length))
                console.log(JSON.stringify(academicYear1))
                lengthOfCourses = $scope.csvresult.length;
                console.log(JSON.stringify(lengthOfCourses));
                $scope.impbtn = false;
                $scope.orgTable = true;

                console.log($scope.impbtn);
                console.log($scope.orgTable);
                //$scope.orgtable = true;


                $http({
                    method: 'POST',
                    url: '/import1',
                    data: JSON.stringify($scope.data),
                    headers: {'Content-Type': 'application/json'}
                }).then(function mySucces(response) {
                    // alert( "Got Response!" );

                    $scope.myWelcome = {};
                    $scope.myWelcome = response.data;
                    //alert("data" + JSON.stringify($scope.myWelcome))
                    console.log(JSON.stringify($scope.myWelcome))
                    if ($scope.myWelcome.status == "success") {
                        //console.log("aloo");
                        // alert($scope.myWelcome.error)
                        //window.location = successUrl;
                    }
                    else {
                        // console.log("fdh");
                        //window.location = successUrl;
                    }
                }, function myError(response) {
                    //alert("Erorr");
                    //console.log("fdgdh");
                    $scope.myWelcome = response.statusText;
                    //alert($scope.myWelcome);
                });
                //r.readAsText(files[0]);

            }
            r.readAsText(files[0]);


        }

        //alert("data" + JSON.stringify($scope.data) )
        console.log(JSON.stringify($scope.data));

    }
    $scope.fileNameChanged1 = function (ele) {
        $scope.csvresult = [];
        //var orgId = "org_1";
        var orgId = $scope.organId;
        var lengthOfCourses = 0;
        var academicYear1 = [];
        var fileName = document.getElementById("fileinput").files[0].name;

        $scope.IsVisible = true;
        $scope.showit = false;
        var files = ele.files;

        var _validFileExtensions = [".csv"];
        if (ele.type == "file") {
            var sFileName = ele.value;
            if (sFileName.length > 0) {
                var blnValid = false;
                var uniqueproperty = false;
                for (var j = 0; j < _validFileExtensions.length; j++) {
                    var sCurExtension = _validFileExtensions[j];
                    if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase()
                        == sCurExtension.toLowerCase()) {
                        blnValid = true;
                        break;
                    }
                }

                if (!blnValid) {
                    //      alert( "Sorry, " + fileName + " is invalid, allowed extensions are: " + _validFileExtensions.join( ", " ) );
                    ele.value = "";
                    return false;
                }
            }
        }

        if (files) {
            var r = new FileReader();
            r.onload = function (e) {

                var contents = e.target.result;
                var lines = contents.split("\n");

                var kpns = [];

                var headers = lines[0].split(",");

                for (var i = 1; i < lines.length; i++) {
                    if (!lines[i] || lines[i] == "") {
                        continue;
                    }
                    var currentline = lines[i].split(",");
                    var obj = {};
                    for (var j = 0; j < headers.length; j++) {
                        obj[headers[j]] = currentline[j];
                    }
                    $scope.csvresult.push(obj);
                    //console.log(JSON.stringify(csvresult))
                    console.log(JSON.stringify($scope.csvresult))
                }

                var unique = {};
                var academicYear1 = [];
                for (var i in $scope.csvresult) {
                    if (typeof(unique[$scope.csvresult[i].academicYear]) == "undefined") {
                        academicYear1.push($scope.csvresult[i].academicYear);
                    }
                    unique[$scope.csvresult[i].academicYear] = 0;
                }


                console.log(JSON.stringify(academicYear1.length))
                console.log(JSON.stringify(academicYear1))
                lengthOfCourses = $scope.csvresult.length;
                console.log(JSON.stringify(lengthOfCourses));
                $scope.data = {
                    "orgId": orgId,
                    "lengthOfCourses": 3,
                    "courses": $scope.csvresult,
                }
                //alert("email " + $scope.email)
                //alert("data" + JSON.stringify($scope.data) )
                $('#myTable').dataTable();

                console.log($scope.data);
                $http({
                    method: 'POST',
                    url: '/import',
                    data: JSON.stringify($scope.data),
                    headers: {'Content-Type': 'application/json'}
                }).then(function mySucces(response) {
                    //alert( "Got Response!" );
                    $scope.myWelcome = {};
                    $scope.myWelcome = response.data;
                    // alert("data" + JSON.stringify($scope.myWelcome))
                    console.log(JSON.stringify($scope.myWelcome))
                    if ($scope.myWelcome.status == "success") {
                        //alert( "hi11" )
                        console.log(response.data);
                        //alert( $scope.myWelcome.error )
                        //window.location = successUrl;
                    }
                    else {
                        console.log(response.data);
                        //window.location = successUrl;
                    }
                }, function myError(response) {
                    //alert("Erorr");
                    $scope.myWelcome = response.statusText;
                    //alert($scope.myWelcome);
                });
                //r.readAsText(files[0]);

            }

            r.readAsText(files[0]);


        }

        //alert("data" + JSON.stringify( $scope.data ) )
        console.log(JSON.stringify($scope.data));

    }
    $scope.save = function () {

        // $scope.courseShow = true;
        $scope.impbtn = false;

        $scope.orgTable = false;
        $scope.editTable = false;
        $scope.widGraph = false;
        // alert( "hi" )
        for (var i = 0; i < $scope.dummy.length; i++) {
            delete $scope.dummy[i]['$$hashKey'];
        }

        console.log(JSON.stringify($scope.csvresult))

        var lengthOfCourses = $scope.dummy.length;
        var orgId = $scope.organId;
        var orgName = $scope.organisation;
        console.log(orgId);
        //var orgId = "org_2";
        $scope.data = {
            "orgId": orgId,
            "orgName": orgName,
            "lengthOfCourses": lengthOfCourses,
            "courses": $scope.dummy,
            "dropdown": $scope.dropdownJsonString
        }

        $http({
            method: 'POST',
            url: '/import',
            data: JSON.stringify($scope.data),
            headers: {'Content-Type': 'application/json'}
        }).then(function mySucces(response) {
            // alert( "Got Response!" );
            $scope.myWelcome = {};
            $scope.myWelcome = response.data;
            // alert("data" + JSON.stringify($scope.myWelcome))
            console.log(JSON.stringify($scope.myWelcome))
            console.log($scope.myWelcome)
            if ($scope.myWelcome[0].status == "success") {
                $scope.courseShow = false;
                $scope.studentshow = false;
                //alert( "hi11" )
                console.log(response.data);
                //alert( $scope.myWelcome.error )
                $("#savepopup").modal("show");
                $scope.onload();

                //window.location = successUrl;
            }
            else {
                console.log(response.data);
                //window.location = successUrl;
            }
        }, function myError(response) {
            //alert("Erorr");
            $scope.myWelcome = response.statusText;
            //alert($scope.myWelcome);
        });


    }


    $scope.editsave = function () {
        //$scope.csvresult = [];
//alert("hello1");
        $("#savepopup").modal("show");
        $scope.courseShow = false;
        $scope.impbtn = false;
        $scope.orgTable = false;
        $scope.editTable = false;
        for (var i = 0; i < $scope.csvresult.length; i++) {
            delete $scope.csvresult[i]['$$hashKey'];
        }
        console.log(JSON.stringify($scope.csvresult))
        var lengthOfCourses = $scope.csvresult.length;
        var orgId = $scope.organId;
        console.log(orgId);
        var orgId = "org_2";
        $scope.data = {
            "orgId": orgId,
            "lengthOfCourses": lengthOfCourses,
            "courses": $scope.csvresult
        }
        $http({
            method: 'POST',
            url: '/import',
            data: JSON.stringify($scope.data),
            headers: {'Content-Type': 'application/json'}
        }).then(function mySucces(response) {
            //alert( "Got Response!" );
            $scope.myWelcome = {};
            $scope.myWelcome = response.data;
            // alert("data" + JSON.stringify($scope.myWelcome))
            console.log(JSON.stringify($scope.myWelcome))
            console.log($scope.myWelcome)
            if ($scope.myWelcome[0].status == "success") {
                //alert( "hi11" )
                console.log(response.data);
                $("#savepopup").modal("show");
                //alert( $scope.myWelcome.error );
                $scope.onload();

                //window.location = successUrl;
            }
            else {
                //alert("hai");
                $("#savepopup").modal("show");
                console.log(response.data);
                window.location = successUrl;
            }
        }), function myError(response) {
            // alert("hello");
            $("#savepopup").modal("show");
            //alert("Erorr");
            $scope.myWelcome = response.statusText;
            // alert($scope.myWelcome);        });
        };
    }
    $scope.home = function () {

        location.reload();

    }


    $scope.editOrganisation = function () {
        // $scope.courseShow = true;
        // $scope.impbtn = false;
        // $scope.courseShow = false;
        if ($scope.flag == 1) {
            $scope.danger = true
            $scope.import = true;
            $scope.sample = true;
            $scope.welcome = false;

        }
        else {

            $("#savepopup").modal("hide");
            $scope.editTable = true;

            $scope.courseShow = false;
            $scope.studentshow = false;
            $scope.impbtn = false;

            $scope.orgTable = false;
            //$scope.editTable = false;
            $scope.widGraph = false;
            // alert( "hi" )
            for (var i = 0; i < $scope.csvresult.length; i++) {
                delete $scope.csvresult[i]['$$hashKey'];
            }

            //alert(JSON.stringify($scope.csvresult))

            var lengthOfCourses = $scope.csvresult.length;
            // console.log($scope.myWelcome.dashboard.orgId);
            var orgId = $scope.organId;
            console.log(orgId);
            $scope.editData = [];
            // var orgId = "org_1";
            $scope.data = {
                "orgId": orgId
            }

            $http({
                method: 'POST',
                url: '/importGet',
                data: JSON.stringify($scope.data),
                headers: {'Content-Type': 'application/json'}
            }).then(function mySucces(response) {
                // alert( "Got Response!" );
                $scope.myWelcome = {};
                $scope.myWelcome = response.data;
                //  alert("data" + JSON.stringify($scope.myWelcome))
                console.log(JSON.stringify($scope.myWelcome))
                console.log(response.data);
                if ($scope.myWelcome.status == "success") {
                    //alert( "hi11" )
                    $scope.editData = $scope.myWelcome.courses;
                    console.log($scope.editData);
                    // $( "#savepopup" ).modal( "show" );
                    //  alert( $scope.myWelcome.error )
                    //window.location = successUrl;
                }
                else {
                    console.log("Fail import");
                    //window.location = successUrl;
                }
            }, function myError(response) {
                //alert("Erorr");
                $scope.myWelcome = response.statusText;
                //alert($scope.myWelcome);
            });


        }
    }


    $scope.save1 = function () {

        //alert("hello");
        // alert(JSON.stringify($scope.csvresult2))
        //var orgId = "org_0";
        //var orgId = $scope.organId;

        // var org_name = "SREC";
        var marks = [];
        var keys = [];
        var mark1 = {};
        var Subject;
        var Mark;
        var studentobj = {}
        var students = [];
        var sub_keys = [];



        for (var k1 = 0; k1 < $scope.csvresult2.length; k1++) {
            delete $scope.csvresult2[k1]['$$hashKey'];
        }
        for (k2 = 0; k2 < $scope.csvresult2.length - 1; k2++) {
            keys = Object.keys($scope.csvresult2[k2]);
        }

        // alert( JSON.stringify( keys ) );

        for (i = 0; i < $scope.csvresult2.length; i++) {
            marks = [];
            for (j = 0; j < keys.length; j++) {
                console.log(JSON.stringify(keys[j]))


                if (keys[j] != "regNumber" && keys[j] != "Student") {
                    mark1 = {};
                    console.log(JSON.stringify(keys[j]))
                    mark1.Subject = keys[j];

                    mark1.Mark = $scope.csvresult2[i][keys[j]];
                    marks.push(mark1);


                }

            }

            //marks.push(mark1);
            // console.log(JSON.stringify(mark1));
            console.log(marks);
            var orgId = $scope.organId;

            studentobj = {

                "roll_no": $scope.csvresult2[i].regNumber,
                "student_name": $scope.csvresult2[i].Student,
                "academicYear": $scope.form.academic,
                "course_name": $scope.form.course,
                "semester": $scope.form.semester,
                "numberOfSubject": 3,
                "marks": marks,
            }


            students.push(studentobj);

        }
  //      alert(JSON.stringify($scope.data));

        $scope.data =
            {

                "orgId": orgId,
                "org_name": $scope.organisation,
                "numberOfStudents": $scope.csvresult2.length,
                "students": students,
                "dropdown": $scope.dropdownJsonString
            }

        //console.log(JSON.stringify( students ));
        //console.log(JSON.stringify( $scope.data ));
        //console.log(JSON.stringify( $scope.organisation ));


//alert(JSON.stringify( marks ));   //alert(JSON.stringify($scope.data));
//             alert(($scope.data.dropdown));
        $http({
            method: 'POST',
            url: '/importStudent',
            data: $scope.data,
            headers: {'Content-Type': 'application/json'}
        }).then(function mySucces(response) {
            //       alert( "Got Response!" );
            $scope.myWelcome = {};
            $scope.myWelcome = response.data;
            //alert("data" + JSON.stringify($scope.myWelcome))
            console.log(JSON.stringify($scope.myWelcome))
            if ($scope.myWelcome[0].status == "success") {

                $("#savepopup").modal("show");
            }
            else {
                //console.log( "fail" );

                //window.location = successUrl;
            }
        }, function myError(response) {
            //     alert("Erorr");
            $scope.myWelcome = response.statusText;
            //alert($scope.myWelcome);
        });


    }

    $scope.fileNameChanged2 = function (ele) {
        //$scope.csvresult2 = [];
        //var orgId = "org_0";
        var orgId = $scope.organId;
        var lengthOfCourses = 0;
        var academicYear1 = [];
        // var fileName = document.getElementById( "fileinput" ).file[0].name;

        $scope.IsVisible = true;
        $scope.showit = false;
        var files = ele.files;

        var _validFileExtensions = [".csv"];
        if (ele.type == "file") {
            var sFileName = ele.value;
            if (sFileName.length > 0) {
                var blnValid = false;
                var uniqueproperty = false;
                for (var j = 0; j < _validFileExtensions.length; j++) {
                    var sCurExtension = _validFileExtensions[j];
                    if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase()
                        == sCurExtension.toLowerCase()) {
                        blnValid = true;
                        break;
                    }
                }

                if (!blnValid) {
                    //alert( "Sorry, " + fileName + " is invalid, allowed extensions are: " + _validFileExtensions.join( ", " ) );
                    ele.value = "";
                    return false;
                }
            }
        }

        if (files) {
            var r = new FileReader();
            r.onload = function (e) {

                var contents = e.target.result;
                var lines = contents.split("\n");

                var kpns = [];

                var headers = lines[0].split(",");

                for (var i = 1; i < lines.length; i++) {
                    if (!lines[i] || lines[i] == "") {
                        continue;
                    }
                    var currentline = lines[i].split(",");
                    var obj = {};
                    for (var j = 0; j < headers.length; j++) {
                        obj[headers[j]] = currentline[j];
                    }
                    $scope.csvresult2.push(obj);
                    //console.log(JSON.stringify(csvresult))

                    console.log(JSON.stringify($scope.csvresult2))
                }
              //  alert(JSON.stringify($scope.csvresult2))

//dropdown student
                var subjectList = Object.keys($scope.csvresult2[0])

                for (i = 0; i < (Object.keys($scope.dropdownParse.courses)).length; i++) {
                    if ((Object.keys($scope.dropdownParse.courses))[i] == $scope.form.course) {
                        var course = (Object.keys($scope.dropdownParse.courses))[i];
              //          alert("academicyear: " + Object.keys($scope.dropdownParse.courses[course]));
                        for (j = 0; j < (Object.keys($scope.dropdownParse.courses[course])).length; j++) {
                            if ((Object.keys($scope.dropdownParse.courses[course]))[j] == $scope.form.academic) {
                                var semester = (Object.keys($scope.dropdownParse.courses[course]))[j];
            //                    alert("semester: " + Object.keys($scope.dropdownParse.courses[course][semester]))
                                for (k = 0; k < (Object.keys($scope.dropdownParse.courses[course][semester])).length; k++) {
                                    if ((Object.keys($scope.dropdownParse.courses[course][semester]))[k] == $scope.form.semester) {
                                        var semList = (Object.keys($scope.dropdownParse.courses[course][semester]))[k];
                                        //alert("semList: " + $scope.dropdownObj.courses[course][semester][semList])
          //                              alert(JSON.stringify($scope.dropdownParse.courses[course][semester][semList]));

                                        for (l = 2; l < subjectList.length; l++) {
                                            ($scope.dropdownParse.courses[course][semester][semList]).push(subjectList[l])
                                        }
        //                                alert(JSON.stringify($scope.dropdownParse.courses[course][semester][semList]));
                                    }
                                }
                                //alert("yes")
                            }
                        }
                    }
                }
                //     alert(" function1" + JSON.stringify($scope.csvresult2))
                //for acc_year
                ///   alert("acc_year: " + Object.keys($scope.dropdownParse.acc_year))
                for (i = 0; i < (Object.keys($scope.dropdownParse.acc_year)).length; i++) {
                    if ((Object.keys($scope.dropdownParse.acc_year))[i] == $scope.form.academic) {
                        var academic = (Object.keys($scope.dropdownParse.acc_year))[i];
      //                  alert("academicyear: " + Object.keys($scope.dropdownParse.acc_year[academic]));
                        for (j = 0; j < (Object.keys($scope.dropdownParse.acc_year[academic])).length; j++) {
                            if ((Object.keys($scope.dropdownParse.acc_year[academic]))[j] == $scope.form.course) {
                                var course = (Object.keys($scope.dropdownParse.acc_year[academic]))[j];
    //                            alert("semester: " + Object.keys($scope.dropdownParse.acc_year[academic][course]))
                                for (k = 0; k < (Object.keys($scope.dropdownParse.acc_year[academic][course])).length; k++) {
                                    if ((Object.keys($scope.dropdownParse.acc_year[academic][course]))[k] == $scope.form.semester) {
                                        var semList = (Object.keys($scope.dropdownParse.acc_year[academic][course]))[k];
                                        //alert("semList: " + $scope.dropdownObj.acc_year[academic][course][semList])
                                        //alert(JSON.stringify($scope.dropdownObj.acc_year[academic][course][semList]));

                                        for (l = 2; l < subjectList.length; l++) {
                                            ($scope.dropdownParse.acc_year[academic][course][semList]).push(subjectList[l])
                                        }
  //                                      alert(JSON.stringify($scope.dropdownParse.acc_year[academic][course][semList]));
                                    }
                                }
//                                alert("yes")
                            }
                        }
                    }
                }


                //for semester
                //alert("semesters: " + Object.keys($scope.dropdownObj.semesters))
                for (i = 0; i < (Object.keys($scope.dropdownParse.semesters)).length; i++) {
                    if ((Object.keys($scope.dropdownParse.semesters))[i] == $scope.form.semester) {
                        var semesters = (Object.keys($scope.dropdownParse.semesters))[i];
                        //alert("semesterSelect: " + Object.keys($scope.dropdownObj.semesters[semesters]));
                        for (j = 0; j < (Object.keys($scope.dropdownParse.semesters[semesters])).length; j++) {
                            if ((Object.keys($scope.dropdownParse.semesters[semesters]))[j] == $scope.form.academic) {
                                var academic = (Object.keys($scope.dropdownParse.semesters[semesters]))[j];
                                //alert("academicSelect: " + Object.keys($scope.dropdownObj.semesters[semesters][academic]))
                                for (k = 0; k < (Object.keys($scope.dropdownParse.semesters[semesters][academic])).length; k++) {
                                    if ((Object.keys($scope.dropdownParse.semesters[semesters][academic]))[k] == $scope.form.course) {
                                        var course = (Object.keys($scope.dropdownParse.semesters[semesters][academic]))[k];
                                        //alert("courseSelect: " + $scope.dropdownObj.semesters[semesters][academic][course])
                                        //alert(JSON.stringify($scope.dropdownObj.semesters[semesters][academic][course]));

                                        for (l = 2; l < subjectList.length; l++) {
                                            ($scope.dropdownParse.semesters[semesters][academic][course]).push(subjectList[l])
                                        }
                                        //alert(JSON.stringify($scope.dropdownObj.semesters[semesters][academic][course]));
                                    }
                                }
                                //alert("yes")
                            }
                        }
                    }
                }

                //alert("after nitin function" + JSON.stringify($scope.csvresult2))
                //alert(JSON.stringify($scope.dropdownObj))
                $scope.dropdownJsonString = JSON.stringify($scope.dropdownParse);
                console.log("Updated Framed Object: " + JSON.stringify($scope.dropdownParse));
                //next will write later


//end
                var keys = Object.keys($scope.csvresult2);
                //  alert( keys );
                // $scope.Student = true;
                //$route.reload();
                $scope.Student = true;
                var unique = {};
                var academicYear1 = [];
                for (var i in $scope.csvresult2) {
                    if (typeof(unique[$scope.csvresult2[i].academicYear]) == "undefined") {
                        academicYear1.push($scope.csvresult2[i].academicYear);
                    }
                    unique[$scope.csvresult2[i].academicYear] = 0;
                }

                //alert(JSON.stringify($scope.csvresult2))
                console.log(JSON.stringify(academicYear1.length))
                console.log(JSON.stringify(academicYear1))
                lengthOfCourses = $scope.csvresult.length;
                console.log(JSON.stringify(lengthOfCourses));
                $scope.courseShow = false;
                $scope.Student = true;
                $scope.data = {
                    "orgId": orgId,
                    "lengthOfCourses": 3,
                    "courses": $scope.csvresult,
                }
                //alert("email " + $scope.email)
                // alert("data" + JSON.stringify($scope.data))
                //$scope.student = truconsole.log($scope.data);
                alert(JSON.stringify($scope.data))
                $http({
                 method: 'POST',
                 url: '/import',
                 data: JSON.stringify($scope.data),
                 headers: { 'Content-Type': 'application/json'}
                 }).then(function mySucces( response ) {
                 // alert( "Got Response!" );
                 $scope.myWelcome = {};
                 $scope.myWelcome = response.data;
                 //  alert("data" + JSON.stringify($scope.myWelcome))
                 console.log(JSON.stringify($scope.myWelcome))
                 if ( $scope.myWelcome.status == "success" ) {
                 // alert( "hi11" )
                 // alert($scope.myWelcome.error)
                 //window.location = successUrl;
                 }
                 else {

                 //window.location = successUrl;
                 }
                 }, function myError( response ) {
                 // alert("Erorr");
                 $scope.myWelcome = response.statusText;
                 //alert($scope.myWelcome);
                 });
                //r.readAsText(files[0]);
                //alert("End :  ..." + JSON.stringify($scope.csvresult2))


            }

                $route.reload();
                r.readAsText(files[0]);

                $scope.Student = true;

            }

            console.log(JSON.stringify($scope.data));

        }



});
app.filter( 'capitalize', function() {
    return function( input ) {
        return ( !!input ) ? input.charAt( 0 ).toUpperCase() + input.substr( 1 ).toLowerCase() : '';
    }
});

