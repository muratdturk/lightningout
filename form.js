const init = function(){
    // document.getElementById('reset-button').addEventListener('click', reset);
    document.getElementById('submit-button').addEventListener('click', submit);
}

const appName = 'c:LWCWrapper';
const componentName = 'c:updateContact';
const lightningEndpoint = 'https://speed-app-3441-dev-ed.scratch.lightning.force.com';
let componentAttributes = {
    'recordId': 'test input', 
    'variantManagedByExternalInput': 'base', 
    'brandId' : 'default'
};

function submit(ev) {
    ev.preventDefault();
    let accessToken = document.getElementById("accessToken").value;
    let brandId = document.getElementById("brandId").value;
    let recordId = document.getElementById("recordId").value;
    let variantManagedByExternalInput = document.getElementById("variantManagedByExternalInput").value;
    showLightningPage(accessToken, brandId, recordId, variantManagedByExternalInput);

}

function showLightningPage(accessToken, brandId, recordId, variantManagedByExternalInput) {
    // console.log('accessToken:  ' + accessToken);
    // console.log('brandId:  ' + brandId);
    let targetElement = document.querySelector("[data-lightning-out]");
    componentAttributes.recordId = recordId;
    componentAttributes.brandId = brandId;
    componentAttributes.variantManagedByExternalInput = variantManagedByExternalInput;

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
            accessToken
    );



}


const reset = function(ev) {
    ev.preventDefault();
    console.log('resetting form');
    let accessToken = document.getElementById("accessToken").value;
    console.log('accessToken before reset: ' + accessToken);
    let form = document.getElementById("lo-form");
    form.reset;
    console.log('accessToken after form.reset: ' + accessToken);
}

function refresh() {
    const at = "refreshing something";
    console.log('accessToken: ' + at);
    document.getElementById("at").innerHTML = at;
}

document.addEventListener('DOMContentLoaded', init);



// const form = document.forms[0];
// form.addEventListener("submit", function(event) {
//   event.preventDefault();
//   const { name, description, task } = this.elements;
//   // or
//   // const { name, description, task } = event.target.elements;
//   
//   console.log(name.value, description.value, task.value);
// });
