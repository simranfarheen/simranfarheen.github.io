---
title: 'Server Side Scripting with Classic ASP'
description: 'A technical blog detailing how to get started with Classic ASP'
pubDate: 'May 31 2018'
---

It all goes back to the year 1996 when ASP 1.0 was released by Microsoft as a **server-side script engine** to dynamically generate web pages. Since then, ASP.NET has succeeded Classic ASP and is popularly used for developing **dynamic websites, web applications and services**.

As it follows, it really isn’t the latest ASP.NET we will talk about in the course of this blog but about its ancestor which still lurks around in certain firms due to their reluctance to give up on their old ways and move on from what they term as *legacy software*.

![alt text](https://raw.githubusercontent.com/simranfarheen/simranfarheen.github.io/master/public/asp_net_1.gif "Could you possibly find the bug?")  
*Could you possibly find the bug here?*

So, to bother knowing about something that came up even before our existence, arises with the need to maintain such systems which, unfortunately, we can neither let go nor let grow. At the very least you’ll save yourself the pain of completely freaking out when introduced to managing, what I will call, any historical piece of server-side code, in your development life. Talk about fixing ice age bugs and you’ll be the modern savior of neolithic times. Convinced enough to travel back in time? If yes, then read on.

___

<h3>But wait, what is Server Side programming?</h3>

For starters, have you noticed how the pages at Facebook change, each time you request the website for something, say, somebody’s profile, a page, maybe a group and so on ? You will notice, that the *basic structure of the web page remains the same*, i.e, people’s profiles always follow the same layout. There’s a profile picture, a cover picture behind it, and your timeline and it’s the same for all your friends, friends of friends, basically everybody on Facebook.

Then, there’s your news feed that has a layout slightly different from the profile page, but overall, everyone’s news feed has the same structure. So all this boils down to the fact that though the page structure remains the same for everybody, the only thing that actually changes is the **content**. The content that is displayed is tailored specifically for a particular user. I might be a cat lover and you might be a dog person and, therefore, our feeds will have content accordingly.

![alt text](https://raw.githubusercontent.com/simranfarheen/simranfarheen.github.io/master/public/asp_net_2.png "Figure: Behind the scenes of an HTTP request sent from the client’s browser and the server’s response to it. Courtesy : http://developer.mozilla.org")  
*Figure: Behind the scenes of an HTTP request sent from the client’s browser and the server’s response to it. Courtesy : http://developer.mozilla.org*


Now, imagine if, for all the millions of people on Facebook, and the millions of pages and groups, a separate .html file was stored. It’s *wayy more* inconvenient than it sounds !

So, what actually happens, is that the servers at Facebook and so many websites alike, take the request from the client’s browser, search for the content requested in their databases and **if found**, put that content on a common template and send this data to the client’s browser *(else, you get those weird errors, you never understood before, like for example, 404)*.

The client’s browser processes this newly arrived HTTP response and displays it to you in the form of that friend’s profile you constantly stalk. Plus, all this wouldn’t have happened if it weren’t for *server-side programming*. This **piece of code which runs on the remote server and generates custom web pages depending on the client’s request**, is what we are going to discuss in the topics to come.

Read more about the nitty-gritty of server-side programming here : [Introduction to Server-Side Programming | MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Introduction)

---

<h3>Classic ASP</h3>

So, what after all is Classic ASP? Well, ASP stands for **Active Server Pages**, and the classic before it, means it’s old. *Really, very* old. Classic ASP pages have the extension .asp as opposed to the .aspx extension which rather denotes pages built using the more modern ASP.NET. These pages contain server-side code written in either VBScipt, JScript or PerlScript within the following block :

```
<% 'language: VBScript %>
```


**Each of these scripts alter the content of the web pages based on requests from the client’s browser**, hence giving the web pages thus generated, a dynamic nature. **How you can go about processing such requests is defined by the languages used at the front end and their interaction with the server side scripts and database working together at the back end**. Since, a popular choice for writing server-side code is VBScript in Classic ASP, we will stick to it in the upcoming examples.


You can connect any database using the Server Object in **VBScript**, however, we will look into **Microsoft’s SQL Server** and see how we can establish a connection with it. As for developing the user interface and putting together the components that give these dynamic pages their look and feel, **basic HTML, CSS & JavaScript** are used. Thankfully, though the server-side code that runs is rather old, we don’t really need to downgrade on the technologies used in the front end or our browsers for that matter. However, what we really need to do, in order to see our .asp pages properly rendered by the browser is to host them on Microsoft’s IIS.

---

<h3>Internet Information Services (IIS)</h3>

![alt text](https://raw.githubusercontent.com/simranfarheen/simranfarheen.github.io/master/public/asp_net_3.png "Internet Information Services Manager Window.")  
*Internet Information Services Manager Window*

Microsoft’s IIS is a web server that you can use in order to host and properly view your ASP pages. IIS comes with the **IIS Manager**, which provides a nice and easy-to-use GUI to manage the websites you host (though there is a *slightly* steep learning curve before you are able to handle it like a pro). In our case, using IIS is a fairly simple process (unlike hosting Django applications on IIS) and can be done in just a couple of minutes. IIS usually comes as a part of Windows features in every system running Windows OS and is a great way to get your code in action.

---

<h3>Microsoft’s SQL Server</h3>

![alt text](https://raw.githubusercontent.com/simranfarheen/simranfarheen.github.io/master/public/asp_net_4.png "SSMS provides a convenient way to deal with your databases. Unless, you are a command line freak.")  
*SSMS provides a convenient way to deal with your databases. Unless, you are a command line freak.*

SQL Server is a relational database management system developed by Microsoft. There are quite a few editions of SQL Server that are available, around 10 to be precise. Usually, **SQL Server Express** comes in handy when you are both, low on budget *and* needs. Along with the Database Engine, we can install the **SSMS** or **SQL Server Management Studio**, in order to be able to create, update and query our databases in the GUI. The database engine thus installed can be connected with the ASP code, through which we can query it easily.

---

<h3>Establishing Connections</h3> 

As for the interesting part, i.e., the code to establish connection with the database is only a matter of few lines.

```
<%  
'Database Variable
Dim strDSN CONST_DB_SERVER = "HOSTNAME\SQLEXPRESS"
strInitialCatalog = "DatabaseName"
strUserId = "SQL_User_Name;"
strPasswd = "SQL_Password;"  
strDSN = "Provider = SQLOLEDB.1;
Password = " & strPasswd & " User ID = " & strUserId & " Initial Catalog = " & strInitialCatalog & "; Data Source = " & CONST_DB_SERVER
Set dbConn = Server.CreateObject("ADODB.Connection")
dbConn.Open strDSN   
%>
```

Replace the placeholders with your database configurations and you will have successfully established a connection with your database engine. From this point onward, you can easily query your database and display the results on your IIS hosted web page.

---

<h3>A Simple Illustration</h3>

As an example, let’s say you are asked to write a server-side script that allows users to look for hotels around Indian cities. Assuming, you have a database that contains the required data, we can write a SQL Server query and execute it in VBScript to display results as follows :

![alt text](https://raw.githubusercontent.com/simranfarheen/simranfarheen.github.io/master/public/asp_net_5.gif "Illustration: A web page built using Classic ASP.")  
*Illustration: A web page built using Classic ASP.*

The SQL Server Query that has been written to display the results takes the following form. Here, we first create the SQL Query and store it in the variable *strSQLHotelList*. We then modify the query depending on our filtering needs and finally execute it using the *Execute( )* Method. Remember, we have already created the *dbConn* object, using *Server.CreateObject(“ADODB.Connection”)* and we are just using it here.

```
<%
'Creating the Query
strSQLHotelList = "SELECT  HotelName, City, Area, TelephoneNo, TotalRooms " & _ "FROM Hotels " & _ "WHERE "
strWhere = ""
If strHotelName <> "" Then
sqlQueryName =  " HotelName LIKE '%" & strHotelName & "%'"
If strWhere <> "" Then
strWhere = strWhere & " and " & sqlQueryName
Else
strWhere = strWhere & sqlQueryName
End if
End If
If strCityName <> "" Then
sqlQueryCity =  " City = '" & strCityName & "'"
If strWhere <> "" Then
strWhere = strWhere & " and " & sqlQueryCity
Else
strWhere = strWhere & sqlQueryCity
End If
End If
strSQLHotelList = strSQLHotelList & strWhere
If strHotelName <> "" or strCityName <> "" Then
strSQLHotelList = strSQLHotelList & " ORDER BY HotelName "

'Executing the Query
Set rsHotelList = dbConn.Execute( strSQLHotelList )
%>
```

And that's all there's to know!

Now, you are completely ready to create your own server-side scripts, way more complicated and useful than the above example. So, go ahead and get your hands dirty, quick ! 

As for those of you who are in dire need of a starter pack, ("Hey, I don’t want a starter pack”, said nobody *ever* ), get the code for the above example at :

[Git Hub Repo for hotelsearch.com](https://github.com/simranfarheen/hotelsearch.com)

Good Luck !