
const VercelAssignment = () => {
  const assignmentData = [
    {
      question: "1. From this list, select your 5 most favourite and 5 least favourite support tasks. Provide a brief explanation for each.",
      answer: (
        <>
          <h3 className="font-bold text-xl">Least Favorite Tasks:</h3><br />
          <ol className="list-decimal list-inside">
            <li className="list-decimal list-inside">
              Help resolve billing issues for customers: <br />Billing issues involve various cases such as plans, discounts, credit memo, clarification, etc. While this may sound simple, these are critical in the business and will require a deep understanding and accuracy. Personally, billing is not my cup of tea and I prefer something technical.</li>
            <br />
            <li className="list-decimal list-inside">
              Respond to 25+ support requests via email every day: <br /> While this may sound interesting and I have the ability to do this when there is a requirement, I wouldn’t prefer this often, as it will take a good amount of energy, make me feel exhausted and may lead to burnout. I would rather focus on less and complex tickets and deliver high quality resolutions to the customer.</li>
            <br />
            <li className="list-decimal list-inside">
              Run ticket review sessions to ensure tone consistency:<br /> When working with developers as our customers, I really focus on the quality of the information provided over the consistency of tone. I believe in tailoring the tone to fit each individual situation that can make our communication more engaging and understanding. So, I prefer to concentrate on the content of our responses rather than a uniform tone across all interactions. While I understand the importance of consistency, I feel that a little flexibility in tone can lead to better support and stronger connections. So, personally I don&apost engage in this task.
            </li>
            <br />
            <li className="list-decimal list-inside">
              Analyze hundreds of support tickets to spot trends the product team can use:<br /> Personally, I often find data analysis less interesting, especially when no resources or tools are available and require manual work. As it does not involve customer interaction, this could feel less rewarding compared to direct support.</li>
            <br />
            <li className="list-decimal list-inside">
              Scheduling time-off coverage and collaborating as part of a growing cohesive support team: <br />While working as a team is important, scheduling can be a hassle. It usually involves a lot of manual work that doesn&apost directly help me with my career goals, which makes it less enjoyable.
            </li>
          </ol>
          <br />
          <h3 className="font-bold text-xl">Most Favorite Tasks:</h3><br />
          <ol className="list-decimal list-inside">
            <li className="list-decimal list-inside">
              Dig Through Logs to Troubleshoot a Customer&aposs Broken Project:<br /> This would be my overall favorite task as it involves problem solving and showcasing the technical skills that allows me to break and fix various challenging problems that the customer comes up with. This way I could also do deep research, learn new tools, troubleshooting methods, products, features etc</li>
            <br />
            <li className="list-decimal list-inside">
              Identify, File, and Resolve Bugs in Vercel/Next.js Repos on GitHub: <br />This is a fun task to do as it involves collaboration with the engineering team and getting a chance to contribute to the product improvement. It is always rewarding to see the impact of my work on the enhancement of the product.</li>
            <br />
            <li className="list-decimal list-inside">
              Work with 3rd party partners to track down a tricky situation for a joint customer: <br />This is something that I always do. This way both of us could solve challenging problems together digging deep into different products, new tools, technologies, and perspectives
            </li>
            <br />
            <li className="list-decimal list-inside">
              Engage multiple users at once in a public discussion, to answer their questions and troubleshoot problems: <br />Public discussions provide me a platform for sharing knowledge and best practices. I find it rewarding to share my insights and solutions as a SME that can benefit multiple users at once, helping them learn the product.</li>
            <br />
            <li className="list-decimal list-inside">
              Write and Maintain Support Articles and Docs Pages: <br />I personally like documenting my work when I discover a solution for any interesting or challenging problems that could help a wider audience.</li>
          </ol>
        </>
      )
    },
    {
      question: "2. What pros, cons and use cases are there when using Edge Functions, Serverless Functions and Edge Middleware with Vercel?",
      answer: (
        <>
          <h3 className="font-bold">Edge Functions:</h3>
          <br />
          <ul className="list-disc list-inside">
            <li>
              <span className="font-bold">Pros:</span>
              <ul className="list-disc list-inside ml-4">
                <li className="list-disc list-inside">Since Edge Functions use a lightweight Edge Runtime, they are faster and cost-effective compared to other serverless runtimes. This is built on top of the V8 engine that is found used by Chrome browser and it does not run within a MicroVM.</li>
                <li className="list-disc list-inside">Edge Functions are faster and more cost-effective than traditional serverless as they use the lightweight Edge Runtime, which is built on the V8 engine used by the Chrome browser and doesn’t run within a MicroVM</li>
                <li className="list-disc list-inside">It performs computation in the region closer to the user making the request that the Edge Runtime eventually reduces latency between function and user, which provides fast global compute.</li>
                <li className="list-disc list-inside">It supports Web Assembly, which allow us to run code written in languages like C or Rust</li>
              </ul>
            </li>
            <br />
            <li>
              <span className="font-bold">Cons:</span>
              <ul className="list-disc list-inside ml-4">
                <li className="list-disc list-inside">Limitations on Memory, which is currently fixed at 128 MB. Could possibly lead to execution failure with 502 status code if exceeded.</li>
                <li className="list-disc list-inside">Currently only ES modules are supported, and many libraries dependent on Node.js APIs are not yet compatible with Edge Functions.</li>
                <li className="list-disc list-inside">For security reasons, dynamic code execution (such as eval) is not permitted. It is necessary to ensure that libraries used do not rely on dynamic code execution to avoid runtime errors.</li>
              </ul>
            </li>
            <br />
            <li>
              <span className="font-bold">Use Cases:</span>
              <ul className="list-disc list-inside ml-4">
                <li className="list-disc list-inside"> Instead of server-side authentication, requests can be validated at the nearest edge to the user in the edge network. Your sign-ins become faster.</li>
                <li className="list-disc list-inside"> Edge runtime gives you geographical data (country, region, city) about your users. So you can restrict or update your content for different countries.</li>
                <li className="list-disc list-inside">Edge Functions can validate requests at the nearest edge location to the user, which eventually reduces the time for the sign-in process.</li>
                <li className="list-disc list-inside">The Edge Runtime provides geographical data (country, region, city) about users. This will help with content customization and restriction based on regional data.</li></ul>
            </li>
          </ul>

          <h3 className="font-bold mt-4">Edge Middleware:</h3>
          <br />
          <ul className="list-disc list-inside">
            <li>
              <span className="font-bold">Pros:</span>
              <ul className="list-disc list-inside ml-4">
                <li className="list-disc list-inside">Edge Middleware executes before the cache, allowing for dynamic modifications to responses based on incoming requests, providing personalized content delivery.</li>
                <li className="list-disc list-inside">By running at the edge, it minimizes latency and ensures faster response times for users, enhancing overall performance.</li>
                <li className="list-disc list-inside">We can execute custom logic, such as rewriting URLs, redirecting requests, and adding headers, before returning a response.</li>
                <li className="list-disc list-inside">Edge Middleware utilizes the Edge runtime, which extends a subset of Web Standard APIs, including FetchEvent, Response, and Request.</li>
                <li className="list-disc list-inside">It can be easily integrated into any framework that allows us to implement without lengthy configuration files.</li>
                <li className="list-disc list-inside">Edge Middleware has no cold boots and 100x faster startups than Node.js on containers or virtual machines.</li>
              </ul>
            </li>
            <br />
            <li>
              <span className="font-bold">Cons:</span>
              <ul className="list-disc list-inside ml-4">
                <li className="list-disc list-inside">Edge Middleware is neither a Node.js nor browser application, which means it doesn&apost have access to all browser and Node.js APIs.</li>
                <li className="list-disc list-inside">Edge Middleware is limited to 5KB per Environment Variable.</li>
                <li className="list-disc list-inside">Since JavaScript objects have methods to allow some operations on them, there are limitations on the names of Environment Variables to avoid having ambiguous code.</li>
                <li className="list-disc list-inside">You cannot set non-standard port numbers in the fetch URL (e.g., https://example.com:8080). Only 80 and 443 are allowed, and if set with a non-standard port, then it will be ignored.</li>
              </ul>
            </li>
            <br />
            <li>
              <span className="font-bold">Use Cases:</span>
              <ul className="list-disc list-inside ml-4">
                <li className="list-disc list-inside">Allows us to run personalized A/B tests without disrupting user experience, allowing for instant deployment of features behind feature flags.</li>
                <li className="list-disc list-inside">Provides quick and secure authentication processes, intercepts malicious bot requests, and ensures users see authorized content immediately without flickering.</li>
                <li className="list-disc list-inside">Automatically localizes content based on user location, allowing for seamless display of relevant languages, currencies, and cultural context without additional geolocation services.</li>
                <li className="list-disc list-inside">Facilitates dynamic page redirects and rewrites, improving SEO by serving content that is easily indexed without client-side routing, while managing multiple custom domains efficiently.</li>
              </ul>
            </li>
          </ul>

          <h3 className="font-bold mt-4">Serverless Functions:</h3>
          <br />
          <ul className="list-disc list-inside">
            <li>
              <span className="font-bold">Pros:</span>
              <br />
              <ul className="list-disc list-inside ml-4">
                <li className="list-disc list-inside">Serverless Functions support up to 100,000 concurrent invocations, ensuring your project can automatically scale even during high traffic bursts.</li>
                <li className="list-disc list-inside">The new function signature uses the Web standard Request and Response APIs, simplifying function creation and enabling the use of tools like MDN and LLMs to easily build APIs.</li>
                <li className="list-disc list-inside">Vercel Functions support streaming responses with zero additional configuration for both Node.js and Edge runtimes, enabling building of chat interfaces on top of LLMs and improving initial page load performance.</li>
                <li className="list-disc list-inside">Pro customers can now run Vercel Functions for up to 5 minutes, and Enterprise customers for up to 15 minutes, allowing for longer-running tasks.</li>
                <li className="list-disc list-inside">Vercel Functions now have faster cold boots, with improvements to the Managed Infrastructure and open-source optimizations for Next.js, resulting in up to twice as fast cold boot times.</li>
                <li className="list-disc list-inside">Vercel Functions with the Node.js runtime can automatically failover to a new region in case of regional downtime, improving resiliency.</li>
                <li className="list-disc list-inside">Serverless Functions now support increased log lengths, enabling better observability when investigating function logs.</li>
              </ul>
            </li>
            <br />
            <li>
              <span className="font-bold">Cons:</span>
              <ul className="list-disc list-inside ml-4">
                <li className="list-disc list-inside">The maximum payload size for the request body or the response body of a Serverless Function is 4.5 MB. If a Serverless Function receives a payload in excess of the limit, it will return an error 413.</li>
                <li className="list-disc list-inside">Serverless Functions have a maximum duration, meaning that it isn&apost possible to stream indefinitely.</li>
              </ul>
            </li>
            <br />
            <li>
              <span className="font-bold">Use Cases:</span>
              <ul className="list-disc list-inside ml-4">
                <li className="list-disc list-inside">Build API services to handle requests and responses.</li>
                <li className="list-disc list-inside">Implement authentication and authorization logic to secure applications.</li>
                <li className="list-disc list-inside">Manage incoming webhooks from third-party services.</li>
              </ul>
            </li>
          </ul>
        </>
      )
    },
    {
      question: "3. Describe how you solved a technical issue that you faced in a previous role (preferably in a previous support role). How did you determine that your solution was successful?",
      answer: (
        <p>
          I had a customer who reported latency issues and delays affecting less than 1% of their requests, which they claimed were caused by Okta. To support this claim, they provided me with a PCAP file captured from two hops away from their Internet Egress Endpoint. Since I was less familiar with analyzing PCAPs, I took the initiative to learn how to analyze them through online and internal resources to gather additional insights.<br /><br />

          After analyzing the PCAP, I observed that requests from the customer’s IP to Okta took a significant amount of time, while requests from Okta took less than one second without any packet loss. Initially, I stated that the issue was occurring on the customer’s end because the requests had not reached Okta at all. However, the customer persistently insisted that the issue was on Okta’s side.<br /><br />

          To investigate further, I scheduled a meeting with the customer. During this meeting, I reviewed the PCAP together with them and noticed several retransmissions occurring within a very short period. Our internal logs indicated that we never received those packets that were sent. Since the PCAP was captured two hops away from their Internet Egress Endpoint, I initially thought that the packets were being dropped somewhere in between. I assumed the packets had to pass through their ISP network and the AWS network (tenant) before reaching Okta.<br /><br />

          However, when I double-checked the transmission details with the customer, they clarified that they had an AWS setup that provided direct internet access for their data center. This meant the packets were routed directly through the AWS network, bypassing the ISP.<br /><br />

          With this new information, I raised a case with AWS, and we identified the issue that is called "Anycast Shift." Basically, the connection was being served by two different AWS Edge Locations simultaneously, which was causing the problem. AWS engineers then applied a traffic engineering policy to mitigate the issue.<br /><br />

          Although the solution did not originate from my end, this case provided me with valuable learning experiences and helped us uncover a rare issue.
        </p>
      )
    },
    {
      question: "4. What do you want to learn or do more of at work?",
      answer: (
        <p>
          I am passionate about technology and the environments where I can break down complex problems and find innovative solutions. My primary goal at work is to continuously expand my technical skill set across various domains, including programming, security, networking, etc. I want to get deeper into advanced troubleshooting techniques, particularly in complex systems, explore and experiment with new tools and frameworks.</p>
      )
    },
    {
      question: "5. A customer writes in requesting help with a build issue but they are using a framework that you have not encountered before. How would you begin troubleshooting this and what questions would you ask the customer to understand the situation better?",
      answer: (
        <>
          <p>
            Before troubleshooting, I would gather additional details from the customer to gain a deeper understanding of the issue and identify its root cause. So, I would start collecting information about their application, environment, and build logs, as well as any relevant documentation they may be referencing. Once I have these details, I would review the build logs to pinpoint the issue and attempt to reproduce the problem using the provided information to confirm whether it is specific to their application. If I can reproduce the issue, further investigation would be necessary to determine if there is a bug, incorrect documentation, or any other underlying issue based on the observed errors.
          </p>
          <br />
          <p>
            Here is the email that I would write to the customer.
          </p>
          <br />
          <p>
            Thank you for reaching out to Vercel Support. I understand that you are facing a build issue, and I am here to help you resolve it as quickly as possible.<br /><br />

            To better assist you, please provide some additional context regarding the issue you are experiencing. Your answers to the following questions will help me understand the issue more clearly and guide you toward the right solution:<br /><br />
          </p>

          <ul>
            <li className="list-decimal list-inside">What specific framework are you using, and what version is it currently?</li>
            <li className="list-decimal list-inside">Is the build failing in your local environment or on the Vercel dashboard?</li>
            <li className="list-decimal list-inside">What error messages do you see on your screen? If you are running the build locally, please provide the debug logs by using the –debug flag. If the issue is on the Vercel Dashboard, you can click on "View Build Logs" within your project dashboard to access the build logs.</li>
            <li className="list-decimal list-inside">Are you encountering any errors when running the application locally? If so, please describe them.</li>
            <li className="list-decimal list-inside">Do you have any documentation that you are referring to for your application?</li>
            <li className="list-decimal list-inside">Is this issue occurring for the first time, or have you faced it in the past?</li>
            <li className="list-decimal list-inside">Did you make any changes to the application prior to encountering this issue?</li>
            <li className="list-decimal list-inside">Is there anything else that you would like to share that might help us understand the problem better?</li>
          </ul>
        </>
      )
    },
    {
      question: `The customer from question 5 replies to your response with the below:
1. “I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out. It must be a platform issue so just fix it for me instead of asking me questions.”
2. Please write a response to the customer. Add information about your decision-making process after the reply.`,
      answer: (
        <>
          <p>
            Hi there,<br /><br />

            Thank you for your response.<br /><br />

            I truly understand your frustration and how challenging it can be to encounter persistent issues while trying to get your project up and running. I want to assure you that I’m here to help you resolve this as quickly as possible.<br /><br />

            To effectively diagnose the problem, I need to gather some specific information about your setup. This information is crucial not only for identifying whether the issue lies within your application or if it is indeed a platform-related concern, but it is also necessary for escalating the issue internally if needed. Without this context, it can be difficult to pinpoint the exact cause and provide you with the right solution.<br />
            <br />
            If you prefer, I would be more than happy to set up a meeting to troubleshoot this together. However, having the details I previously requested would be of great help to resolve the issue efficiently.
          </p>
          <br />
          <p>
            <strong>Decision Making Process:</strong>
          </p>

          <ol className="list-decimal list-inside">
            <li className="list-decimal list-inside">While it is necessary to have some details to understand the issue, it is also important to acknowledge their frustration and show empathy towards the same along with some assurance.</li>
            <li className="list-decimal list-inside">It is also important for me to clarify why I need these details and why they must gather them. This sets the expectation to the customer and will help them understand the troubleshooting process.</li>
            <li className="list-decimal list-inside">Offering support on a meeting would be helpful for both the customer and me to understand the issue efficiently. There are times when customers may not provide accurate details, which may lead to asking more questions or details.</li>
            <li className="list-decimal list-inside">Troubleshooting the issue along with the customer and updating them proactively will encourage them to provide necessary information.</li>
            <li className="list-decimal list-inside">I also need to ensure that I am keeping a respectful tone and not sound demanding while asking for any additional details.</li>
          </ol>
        </>
      )
    },
    {
      question: `7. A customer writes in to the Helpdesk asking: "How do I redirect from the /contact path to https://example.com?"  Please write a response to the customer. Add information about your decision making process after the reply.`,
      answer: (
        <>
          <p>
            Hi there,<br /><br />

            Thank you for reaching out to Vercel support.<br /><br />

            It looks like you are looking to implement in-application redirection. You can achieve this using either the next.config.js configuration file for Next.js projects or the vercel.json configuration file for other use cases.
            <br /><br />

            To implement a permanent redirection from the /contact path to https://example.com, you can use the following configuration:

            <br />
          </p>
          <br />
          <pre className="bg-gray-100 p-4 rounded">
            <code className="language-javascript">
              {`module.exports = {
  async redirects() {
    return [
      {
        source: '/contact',
        destination: 'https://example.com',
        permanent: true,
      },
    ]
  },
}`}
            </code>
          </pre>
          <p>
            <br />
            Note: The permanent property is a boolean that determines whether the redirect is permanent or temporary, with the default set to true. When set to true, the status code will be 308, indicating a permanent redirect. If you want a temporary redirect, simply set the permanent property to false, which will use status code 307.
            <br /><br />
            To learn more, refer to this documentation - <a href="https://vercel.com/guides/does-vercel-support-permanent-redirects#in-application-redirects" className="text-blue-300 underline">https://vercel.com/guides/does-vercel-support-permanent-redirects#in-application-redirects</a>
            <br /><br />
            If this is not what you are looking for, please elaborate your requirements in detail, which will help me understand them better and get you the right solution.

          </p>

          <br />
          <p>
            <strong>Decision Making Process:</strong>
          </p>
          <br />
          <ol className="list-decimal list-inside">
            <li className="list-decimal list-inside">Customer has not specifically mentioned that they need a solution for Vercel, but considering they have reached out to Vercel, I have provided the solution accordingly.</li>
            <li className="list-decimal list-inside">I also need to make sure that I don’t confuse the customer with a non-Vercel solution as the customer doesn’t sound too familiar and as it may be out of Vercel’s support scope, that could lead to more non-Vercel questions from the customer.</li>
            <li className="list-decimal list-inside">If they are not looking for this solution, and expecting something that is outside of Vercel, I would ask them to elaborate their requirement in detail, so I could understand the requirement and set the right expectation.</li>
            <li className="list-decimal list-inside">Providing the documentation link will also help them refer to it in the future and help them find more details.</li>
          </ol>

        </>
      )
    },
    {
      question: "8. A customer is creating a site and would like their project to not be indexed by search engines.  Please write a response to the customer. Add information about your decision making process after the reply",
      answer: (
        <>
          <p>
            Thank you for reaching out to Vercel support.<br /> <br />

            With regards to your query, I would like to say that you can prevent your site from being indexed by search engines by using the X-Robots-Tag: noindex HTTP header. <br /><br />

            For Preview Deployments, please note that they are not indexed by search engines by default, as Vercel automatically sets the X-Robots-Tag HTTP header to noindex.<br /><br />

            For Production Deployments, you can prevent indexing by adding the X-Robots-Tag: noindex HTTP header to your responses. You can achieve this by configuring the header object in your vercel.json file.<br /><br /> Here is an example:

            <br />
          </p>
          <br />
          <pre className="bg-gray-100 p-4 rounded">
            <code className="language-javascript">
              {`{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Robots-Tag",
          "value": "noindex"
        }
      ]
    }
  ]
}
`}
            </code>
          </pre>
          <p>
            <br /><br />

            For more information about the headers object, please refer to our documentation here - <a href="https://vercel.com/docs/projects/project-configuration#headers" className="text-blue-300 underline">https://vercel.com/docs/projects/project-configuration#headers</a>
            <br /><br />
            To learn more about the X-Robots-Tag, please refer to this article - <a href="https://vercel.com/guides/are-vercel-preview-deployment-indexed-by-search-engines#x-robots-tag-header" className="text-blue-300 underline">https://vercel.com/guides/are-vercel-preview-deployment-indexed-by-search-engines#x-robots-tag-header</a>
            <br /><br />
            Note: If you are using a custom domain assigned to a non-production branch, please note that the X-Robots-Tag: noindex header will not be set automatically. In this case, you can follow the same steps given for Production Deployments to manually add the header.
          </p>

          <br />
          <p>
            <strong>Decision Making Process:</strong>
          </p>
          <br />
          <ol className="list-decimal list-inside">
            <li className="list-decimal list-inside">Initially, the customer did not specify whether they need the solution for Production or Preview deployments, so it is best to provide information for both types of deployments.</li>
            <li className="list-decimal list-inside">Including an example snippet will help the customer understand how to add the header in the configuration, especially since the headers documentation does not provide an example for the X-Robots-Tag.</li>
            <li className="list-decimal list-inside">Adding an additional note about Preview deployment’s limitation will ensure the customer does not miss the important information.</li>
            <li className="list-decimal list-inside">To support the solution that I have provided, adding the links to the documentation will help the customer refer to them in the future.</li>
          </ol>

        </>
      )
    },
    {
      question: "9. What do you think is the most common problem which customers ask Vercel for help with? How would you help customers to overcome this problem, short-term and long-term?",
      answer: (
        <p>
          The most common problems customers ask Vercel about are related to build errors and deployment issues, based on my observations from public Vercel community discussions. Vercel&aposs customer base includes students, non-developers, and developers, all of whom may face challenges during development and deployment on the platform. These issues can arise due to their limited understanding, incorrect setup, or lack of resources.
          <br /><br />
          For short-term, I would help customers overcome their specific problems by providing tailored guidance and resources based on their setup and environment. This could involve analyzing their build logs, checking configurations, and directing them to relevant articles and documentation.
          <br /><br />
          However, for the long-term, I would create public support articles addressing common problems. These articles would provide step-by-step instructions and best practices to help customers resolve issues on their own. This way, I could focus on more complex issues for which the customers need Vercel’s help with.

        </p>
      )
    },
    {
      question: "10. How could we improve this familiarization exercise?",
      answer: (
        <p>
          This exercise is really good already. However, I believe some of the tasks need to be updated based on the latest documentation. For example, it looks like the Edge Function is now called Edge Runtime and the Serverless Function is now called Node.js Runtime (Probably it was intentionally done to evaluate research skills). Otherwise, everything is good, which also helped me understand the Vercel product much better.
        </p>
      )
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Vercel Assignment</h1>
      {assignmentData.map((item, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">{item.question}</h2>
          <div className="prose prose-lg">{item.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default VercelAssignment;