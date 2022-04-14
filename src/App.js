import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./App.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Introduction" {...a11yProps(1)} />
          <Tab label="Architectural design" {...a11yProps(2)} />
          <Tab label="Technology used" {...a11yProps(3)} />
          <Tab label="Implementation" {...a11yProps(4)} />
          <Tab label="Future Scope" {...a11yProps(5)} />
          <Tab label="Bibliography" {...a11yProps(6)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div class="markdown-body">
          <h1>Project 2 by Group 6</h1>
          <p>
            <em>Harsh Jobanputra - rw7800</em>
          </p>
          <p>
            <em>Khadija Hasta - mg7491</em>
          </p>
          <p>
            <em>Pravesh Jain - on5332</em>
          </p>
          <p>
            <em>Sankalp Kasale - ae1264</em>
          </p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div class="markdown-body">
          <h1>AWS EMR To Structure Unstructured data analysis</h1>
          <h2>Aim</h2>
          <p>
            To convert the raw input data into readable format or processed
            information that can be easily visualized. The primary objective
            also includes making the access to data easier and optimized.
          </p>
          <h2>Description</h2>
          <p>
            You have vast amounts of data to sift through, and your team has
            analyzed the problem and determined a big data solution is the best
            fit for the job. With so many options available in terms of Cloud
            solution providers, big data tools, set up, and configuration, the
            work ahead can seem daunting. Here the solution we propose is AWS
            EMR.
          </p>
          <p>
            The goal of our project is to emulate a real-world production
            scenario in which we process logs using AWS Elastic MapReduce. Tons
            of logs are generated every hour in any medium or large-scale
            project, and that quantity is anticipated to grow drastically in the
            near future - therefore processing that data in a distributed manner
            via Amazon Elastic MapReduce is critical for log analysis. The
            Apache/Application Logs will be copied to Amazon S3 in this project.
            SQL and SAS are commonly used by data scientists. Data scientists
            typically pull data from tables using SQL and Python, which we shall
            consider in our study. There are a number of approaches to this
            processing, but after considering the pros and cons of each, we've
            decided to go with the second option, which is to use the AWS EMR
            Platform. Our team's main goal is to make data access more
            convenient and efficient.
          </p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div class="markdown-body">
          <h1>Architecture</h1>
          <p>
            <img
              height={"50%"}
              src="https://user-images.githubusercontent.com/89222659/163089081-e822efc7-63d3-4323-851b-cd056f69e13f.png"
              alt="image"
            />
          </p>
          <p>
            Our project architectural design includes 5 important modules namely
            Amazon S3, Hadoop, Apache Spark, Hive and AWS EMR. As you can see,
            the S3 would store the unstructured log data obtained for generating
            log insights. This log data has to be converted into meaningful
            information. To do this we would first clean the data, organize it
            and generate labels and attributes using Apache Spark and Hadoop.
            Next the data is then aggregated, queried on and processed into
            Summary tables using Hive. This data is then sent to Amazon EMR
            where the entire data is analyzed and grouped into different
            Clusters according to the business logic implemented. The meaningful
            processed data generated is then used by Users.
          </p>
          <p>
            Given below are some diagrams we have modeled to illustrate the
            working of our system.
          </p>
          <h1>Internal Working Diagram</h1>
          <p>
            <img
              height={"50vw"}
              src="https://user-images.githubusercontent.com/89222659/163084105-50a0e503-0ae4-4b4e-97b1-7cb56082ea75.png"
              alt="image"
            />
          </p>
          <h1>Activity Diagram</h1>
          <p>
            <img
              src="https://user-images.githubusercontent.com/89222659/163088498-49d18968-78cc-47c9-9281-6a3c4eb6e291.png"
              alt="image"
            />
          </p>
          <h1>Workflow Diagram for AWS EMR</h1>
          <p>
            <img
              src="https://user-images.githubusercontent.com/89222659/163088939-d2f78d2c-25fe-43c6-8254-2ea676d6ab0e.png"
              alt="image"
            />
          </p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div class="markdown-body">
          <p>The following technologies have been used -</p>
          <h1>1. Amazon EMR Cluster</h1>
          <p>
            Amazon EMR is a cloud big data platform that uses open-source
            analytics frameworks to conduct large-scale distributed data
            processing operations, interactive SQL queries, and machine learning
            (ML) applications. Using Amazon EMR for this project would be the
            best option since it permits large-scale data processing and what-if
            analysis to identify hidden patterns, connections, market trends,
            and customer preferences using statistical algorithms and predictive
            models.{" "}
            <a href="https://github.com/sankalp98/Project_2/wiki/6.-Bibliography">
              [1]
            </a>{" "}
            talks more about EMR's role in log analysis. Additionally here are
            some EMR use cases listed :
          </p>
          <ul>
            <li>
              It makes extracting data from a multitude of sources, processing
              it at scale, and making it available to applications and consumers
              simple.
            </li>
            <li>It is capable of processing real-time data streams.</li>
            <li>
              It aids in the adoption of data science and machine learning.
            </li>
          </ul>
          <h1>2. Amazon S3 as Data Lake</h1>
          <p>
            In our project we use the highly versatile storage solution, AWS S3.
            Not only can it act as a repository for large files awaiting big
            data processing, it finds application in such things as hosting
            static content for your websites. We'll utilize Amazon S3 as a data
            lake, which can store and retrieve any quantity of data from
            anywhere on the internet at any time. Amazon S3 is simple to use,
            stores both structured and unstructured data, is cost-effective, and
            allows users to execute Big data analytics on a single system
            without having to move the data to another server.
          </p>
          <p>It's use cases include :</p>
          <ul>
            <li>
              <p>Build a data lake</p>
            </li>
            <li>
              <p>Back up and restore critical data</p>
            </li>
            <li>
              <p>Archive data at the lowest cost</p>
            </li>
            <li>
              <p>Run cloud-native applications</p>
            </li>
          </ul>
          <h1>3. Apache Spark</h1>
          <p>
            Log analysis is an ideal use case for Spark. It's a very large,
            common data source and contains a rich set of information. Spark
            allows you to store your logs in files to disk cheaply, while still
            providing a quick and simple way to process them. We'll utilize
            Apache Spark since it supports several languages, hive-SQL, S3
            integration, and can read structured and unstructured data, as well
            as streaming and batch processing.
          </p>
          <h1>4. Hadoop</h1>
          <p>
            Apache Hadoop is an open source framework that is used to
            efficiently store and process large datasets ranging in size from
            gigabytes to petabytes of data. Instead of using one large computer
            to store and process the data, Hadoop allows clustering multiple
            computers to analyze massive datasets in parallel more quickly.
          </p>
          <h1>5. Hive</h1>
          <p>
            Apache Hive is a data warehouse infrastructure built on top of
            Hadoop. It allows processing of data with SQL-like queries and it’s
            very pluggable so we can configure it to process our logs quite
            easily.
          </p>
          <h1>6. Python</h1>
          <p>
            Python is an interpreted, general-purpose, high-level language with
            an object-oriented approach. It is one of the easiest languages to
            learn and has impressive libraries and works perfectly for every
            stage of data science hence we will be using the language for our
            log analysis. In{" "}
            <a href="https://github.com/sankalp98/Project_2/wiki/6.-Bibliography">
              [2]
            </a>{" "}
            they discuss how Python is excellent for use in log analysis.
          </p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div class="markdown-body">
          <h1>Generating Log data</h1>
          <ol>
            <li>
              We start with generating thousands of realistic log data
              containing urls, IPs and error codes using a library FLOG :{" "}
              <a href="https://github.com/mingrammer/flog">
                https://github.com/mingrammer/flog
              </a>{" "}
              . Once the libray is set up on the system, we can access the
              unstructured logs using flog commands and save the logs as a .csv
              extension.
            </li>
          </ol>
          <p>
            <img
              src="https://user-images.githubusercontent.com/89222659/163091334-7ee2d263-caf1-4f18-b6bf-55e6841beb33.png"
              alt="image"
            />
          </p>
          <p>
            <img
              src="https://user-images.githubusercontent.com/89222659/163091592-a54a4558-9c42-4ef5-941a-3ba8ef327373.png"
              alt="image"
            />
          </p>
          <h1>Creating S3 bucket</h1>
          <ol start="2">
            <li>
              Next, in order to store the logs for further computation, we
              create our S3 bucket on the AWS Dashboard by granting it public
              access so that the data can be analyzed using EMR. The below steps
              can be followed for the same.
            </li>
          </ol>
          <p>
            <img
              src="https://user-images.githubusercontent.com/89222659/163092614-f46358e0-58b8-400b-a5c0-74073ef018ad.png"
              alt="image"
            />
          </p>
          <p>
            <img
              src="https://user-images.githubusercontent.com/89222659/163092742-699abe3d-7840-4c03-a56b-dba5535b921e.png"
              alt="image"
            />
          </p>
          <p>
            <img
              src="https://user-images.githubusercontent.com/89222659/163092792-f781dfa8-5986-4ade-97c7-0022a353aa80.png"
              alt="image"
            />
          </p>
          <ol start="3">
            <li>
              Next, we need to upload a python script containing the business
              logic for analysis and pull the data logs into the bucket. To do
              this click on the Upload button in scripts folder to upload the
              python script. Similarly upload the logs.csv file in the root
              folder.
            </li>
          </ol>
          <p>
            <img
              src="https://user-images.githubusercontent.com/89222659/163095277-0e611cfa-82c3-4dda-961e-30f3925ff92f.png"
              alt="image"
            />
          </p>
          <h1>Create Clusters in EMR</h1>
          <ol start="4">
            <li>
              Now navigate to the EMR instance and create clusters for analyzing
              your data. Here you would also have to enter your S3 Bucket url of
              logs folder for EMR to access it. Additionally select the Spark
              software configuration as well as the Key pair emr for the EC2 key
              pair.
            </li>
          </ol>
          <p>
            <img
              src="https://user-images.githubusercontent.com/89222659/163096068-fd87dc64-f7cb-4e51-9bbb-1058cdb51f53.png"
              alt="image"
            />
          </p>
          <p>
            <img
              src="https://user-images.githubusercontent.com/89222659/163096097-f585ffec-a925-441c-a9a6-b135679d7f6a.png"
              alt="image"
            />
          </p>
          <p>
            <img
              src="https://user-images.githubusercontent.com/89222659/163096130-b98517fc-7515-4d92-9e39-9ffd4402d641.png"
              alt="image"
            />
          </p>
          <h1>Specify STEPS for EMR</h1>
          <ol start="5">
            <li>
              Now our EMR has to analyze the log data. This is done by
              configuring the Steps in the cluster created which is nothing but
              the business logic specified in the python script below.
            </li>
          </ol>
          <p>
            <img
              src="https://user-images.githubusercontent.com/89222659/163097257-83c7d4db-1c4d-4671-ac1b-43fe890893e8.png"
              alt="image"
            />
          </p>
          <p>
            In the code, we are creating a spark application called Total log
            errors and creating a log data frame to temporary hold the data
            provided if the data source is not null. Next we create a sql table
            called logs_data on which we run an sql query to fetch the
            unstructured data according to its error codes. The result set is
            then written to the output url we specify in the code.
          </p>
          <ol start="6">
            <li>
              Add a step, specifying the application as Spark, the application
              location as the python script location on S3 and the arguments as
              the logs file and click on Add.
            </li>
          </ol>
          <p>
            <img
              src="https://user-images.githubusercontent.com/89222659/163098876-810aa0c2-3080-442d-bce1-a95bb4aa01ec.png"
              alt="image"
            />
          </p>
          <ol start="7">
            <li>Wait for the status to change from Pending to Completed.</li>
          </ol>
          <p>
            <img
              src="https://user-images.githubusercontent.com/89222659/163099076-bfc01dfc-d60c-492b-8a56-7537645cb5a9.png"
              alt="image"
            />
          </p>
          <ol start="8">
            <li>
              Once done check the S3 bucket for the creation of a new output
              folder.
            </li>
          </ol>
          <p>
            <img
              src="https://user-images.githubusercontent.com/89222659/163099378-c8658531-fc97-4bbb-b3f2-2a5502cd1851.png"
              alt="image"
            />
          </p>
          <h1>Output</h1>
          <ol start="9">
            <li>
              Click on the output folder. You would be able to see many files.
              On opening up 2-3 files, we see that each file contains log data
              grouped according to its similar error code.
            </li>
          </ol>
          <h2>Input</h2>
          <p>
            <img
              src="https://user-images.githubusercontent.com/89222659/163101289-85a985f3-8878-499d-9f12-9592fb27eca4.png"
              alt="image"
            />
          </p>
          <h2>Output</h2>
          <p>
            <img
              src="https://user-images.githubusercontent.com/89222659/163101342-5f807bd1-31b5-488a-b7d4-28f991755c54.png"
              alt="image"
            />
          </p>
          <p>
            Thus we were successfully able to structure unstructured log data
            using AWS EMR.
          </p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <div class="markdown-body">
          <h1>Machine learning</h1>
          <p>
            Our project can be used as a base for exploiting EMR's built-in ML
            tools to further support decision-making, using decision trees,
            random forests, support-vector machines and logistic regression on
            log data.{" "}
            <a href="https://github.com/sankalp98/Project_2/wiki/6.-Bibliography">
              [3]
            </a>{" "}
            talks more about how we can best put EMR into use for analysis.
          </p>
          <h1>Clickstream analysis</h1>
          <p>
            Additionally we can expand our project by implementing Clickstream
            analysis using EMR which can help organizations understand customer
            behaviors, find ways to improve a website layout, discover which
            keywords people are using in search engines and see which word
            combinations lead to sales. In{" "}
            <a href="https://github.com/sankalp98/Project_2/wiki/6.-Bibliography">
              [4]
            </a>{" "}
            we get a chance to dive deeper into Clickstream analytics using
            Amazon EMR, Redshift and Elasticsearch.
          </p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <div class="markdown-body">
          <h1>
            [1] "How to analyze log data with Python and Apache Spark", Dipanjan
            (DJ) Sarkar (Red Hat), Opensource.com, May, 2019., p.g. 1-8.
          </h1>
          <p>
            Synopsis: This is a website that discusses why and how is Python the
            best programming language for data analysis as well as log analysis.
            It also shows us how we can use the language for analyzing data logs
            using Apache Spark.
          </p>
          <p>
            Reliablity: Dipanjan (DJ) Sarkar (Red Hat) is a Data Scientist at
            Red Hat, a published author, consultant and trainer. Opensource.com
            is an popular website that publishes technical articles and
            resources.
          </p>
          <h1>[2] "View log files", AWS, pg 1-3</h1>
          <p>
            Synopsis: This is the AWS website that how we can view, analyze and
            work with log data using Amazon EMR and S3.
          </p>
          <p>
            Reliablity: AWS is architected to be the most flexible and secure
            cloud computing environment available today.
          </p>
          <h1>
            [3] "Machine Learning with PySpark and Amazon EMR", Mihajlovic
            Aleksa, Towards Data Science, Feb, 2020., pg 1-10.
          </h1>
          <p>
            Synopsis: This is a technical website that discusses about how to
            approach analyzing a data set which is very big in volume and how to
            run some computationally expensive ML algorithms against this data
            using EMR and Spark.
          </p>
          <p>
            Reliablity: Mihajlovic Aleksa is a Data Analyst, passionate about
            Analytics, Statistics, Data Science and Big Data. Towards Data
            Science is a publication where independent authors can publish their
            work, share their knowledge and expertise, and engage a wide
            audience on Medium.
          </p>
          <h1>
            [4] "Clickstream Analysis on Amazon EMR, Amazon Redshift and
            Elasticsearch", Dash Desai, April 23, 2020,. pg 1-10
          </h1>
          <p>
            Synopsis: This is a website that talks about ingesting and
            aggregating Clickstream logs on Amazon EMR using StreamSets
            Transformer Engine, and then analyze the data using Elasticsearch,
            Kibana, and Amazon Redshift.
          </p>
          <p>
            Reliablity: Dash Desai is a data science enthusiast. Streamsets is a
            pipeline product website which helps their customers achieve their
            goal by solving the problem of data integration and data management
            for continuous delivery and constant change across any
            platform–past, present, and future.
          </p>
        </div>
      </TabPanel>
    </Box>
  );
}
