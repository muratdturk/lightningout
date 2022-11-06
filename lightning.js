const appName = 'c:LWCWrapper';
const componentName = 'c:updateContact';
const lightningEndpoint = 'https://speed-app-3441-dev-ed.scratch.lightning.force.com';
const authToken = '!AQsAQNBFqejcwMt5PS1voA1wMIrzKVPdSTULvKpWqbuYX0qGvjkeCuE.XZEqfpB1bgmD88rlZ33fJcZ42HWQGirk9B71iloc';
const sessionId = 'abcd';
const targetElement = document.querySelector("[data-lightning-out]");
const componentAttributes = {'recordId': 'test input'};
$Lightning.use(
        appName,
        function (){
          $Lightning.createComponent(
                  componentName,
                  componentAttributes,
                  targetElement,
                  function (cmp){
                    console.log('lightning component created');
                  }
          );
        },
        lightningEndpoint,
        authToken
);