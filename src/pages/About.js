const About = () => {
  return (
    <>
      <body className="flex flex-col min-h-100vh">
        <div className="flex-1">
          <div className="mt-4 p-8 text-primaryCol">
            <div className="text-2xl mb-4">About Us and This Application</div>
            <p className="mb-4">
              Downwind paddling is best suited to certain weather conditions.
              Paddlers are constantly reviewing weather data to find suitable
              weather conditions. This application is designed quickly find days
              that might be suitable within a 10 day forecast.
            </p>
            <p className="mb-4">
              The initial version of this application is for paddlers looking
              for suitable conditions to paddle from locations North of
              Mooloolaba to Mooloolaba or even further south.
            </p>
            <p className="mb-4">
              If there is interest in developing the application further, we may
              consider adding the following:
            </p>
            <ol className="list-disc ml-8">
              <li className="">
                Finding suitable conditions when paddling to Mooloolaba beach
                from the North
              </li>
              <li className="">
                Enabling paddlers to set their preferred conditions (currently
                fixed), and
              </li>
              <li className="">
                Providing paddlers with the opportunity to change locations
                (currently Mooloolaba only).
              </li>
            </ol>
            <div className="mt-4">
              <p>If you are finding the application useful and have ideas to improve it, please feel free to send yout thoughts using the form in our contact page. </p>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default About;
