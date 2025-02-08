 // Toggle mobile menu
 const menuBtn = document.getElementById("menu-btn");
 const closeBtn = document.getElementById("close-btn");
 const mobileMenu = document.getElementById("mobile-menu");
 
 menuBtn.addEventListener("click", () => {
   mobileMenu.style.display = "block";
 });
 
 closeBtn.addEventListener("click", () => {
   mobileMenu.style.display = "none";
 });
 
 // Toggle outer dropdown menu in mobile view
 const outerDropdown = document.querySelector(
   ".mobile-dropdown .dropdown-toggle"
 );
 const outerDropdownContent = document.querySelector(
   ".mobile-dropdown .mobile-dropdown-content"
 );
 
 outerDropdown.addEventListener("click", (event) => {
   event.stopPropagation(); // Prevents the menu from closing if clicking on the toggle
   // Close the inner dropdown if it's open
   const innerDropdownContent = document.querySelector(
     ".mobile-dropdown .inner-dropdown-content"
   );
   innerDropdownContent.style.display = "none";
 
   // Toggle the outer dropdown
   outerDropdownContent.style.display =
     outerDropdownContent.style.display === "block" ? "none" : "block";
 });
 
 // Toggle inner dropdown menu in mobile view
 const innerDropdown = document.querySelector(
   ".mobile-dropdown .inner-dropdown .dropdown-toggle"
 );
 const innerDropdownContent = document.querySelector(
   ".mobile-dropdown .inner-dropdown-content"
 );
 
 innerDropdown.addEventListener("click", (event) => {
   event.stopPropagation(); // Prevents the outer dropdown from closing when inner dropdown is clicked
   // Toggle the inner dropdown
   innerDropdownContent.style.display =
     innerDropdownContent.style.display === "block" ? "none" : "block";
 });


 document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});


// Logo data
const logos = [
    { 
            name: "American Commerce/MAPFRE Insurance", 
            img: "../assets/logo1.PNG", 
            details: `
                <img src="../assets/logo1.PNG" alt="Foremost Insurance">
                <strong>American Commerce/MAPFRE Insurance</strong><br>
                P.O. Box 0915, Carol Stream, IL 60132-0915<br>
                <a href="https://www.foremost.com" target="_blank">www.foremost.com</a><br><br>

               <strong>Customer Service</strong><br>
Service: (800) 222-2114<br><br>

<strong>Claims</strong><br>
Website: <a href="https://forms.mapfreinsurance.com/ClaimsForms/CompanySelection.jsp?systemCode=CIC" target="_blank">Claims</a><br>
Claims: (877) 224-5677<br><br>

<strong>Billing</strong><br>
Website: <a href="https://www.paybill.com/V2/Workflow/PaymentWorkflow/ClientAccount" target="_blank">Make a Payment</a><br><br>

<strong>Address</strong><br>
P.O. Box 709101<br>
Webster, MA 01570-9101<br>
<a href="https://www.mapfreinsurance.com" target="_blank">www.mapfreinsurance.com</a>


               
            `
        },{ 
            name: "BenchMark Insurance", 
            img: "../assets/logo2.PNG", 
            details: `
                <img src="../assets/logo2.PNG" alt="Foremost Insurance">
<strong>Customer Service</strong><br>
Toll Free: (800) 283-0622<br><br>

<strong>Claims</strong><br>
Website: <a href="https://www.benchmarkinsco.com/claims" target="_blank">Claims</a><br><br>

<strong>Address</strong><br>
100 Lake Street West<br>
Wayzata, MN 55391<br>
<a href="https://www.benchmarkinsco.com" target="_blank">www.benchmarkinsco.com</a>
            `
        },
        { 
            name: "Burnsand and Wilcox Insurance", 
            img: "../assets/logo3.PNG", 
            details: `
                <img src="../assets/logo3.PNG" alt="Another Insurance">
                <strong>Customer Service</strong><br>
Website: <a href="https://www.burnsandwilcox.com/offices/charlotte/" target="_blank">Customer Service</a><br>
Customer Service: (704) 525-1152<br><br>

<strong>Billing</strong><br>
Website: <a href="https://ezpay.burns-wilcox.com/" target="_blank">Make a Payment</a><br><br>

<strong>Address</strong><br>
14120 Ballantyne Corporate Place, Cullman Park<br>
Suite 500<br>
Charlotte, NC 28277<br>
<a href="https://www.burnsandwilcox.com" target="_blank">www.burnsandwilcox.com</a>
`
        },
        { 
            name: "Canal Insurance", 
            img: "../assets/logo4.PNG", 
            details: `
                <img src="../assets/logo4.PNG" alt="Another Insurance">
                <strong>Customer Service</strong><br>
General: (864) 242-5365<br><br>

<strong>Claims</strong><br>
Website: <a href="https://www.canalinsurance.com/webclaimform.asp" target="_blank">Claims</a><br>
Phone: (800) 452-6911<br><br>

<strong>Address</strong><br>
400 E. Stone Avenue<br>
Greenville, SC 29601<br>
<a href="https://www.canalinsurance.com" target="_blank">www.canalinsurance.com</a>

`
        },
        { 
            name: "Confier Insurance", 
            img: "../assets/logo5.PNG", 
            details: `
                <img src="../assets/logo5.PNG" alt="Another Insurance">
                <strong>Claims</strong><br>
Website: <a href="https://www.coniferinsurance.com/claims" target="_blank">Claims</a><br>
Claims: (800) 459-1690<br><br>

<strong>Billing</strong><br>
Website: <a href="https://coniferinsurance.com/make-a-payment/" target="_blank">Pay Your Bill</a><br>
Pay Your Bill: (248) 262-5406<br><br>

<strong>Address</strong><br>
550 W. Merrill St.<br>
Suite 200<br>
Birmingham, MI 48009<br>
<a href="https://www.coniferinsurance.com" target="_blank">www.coniferinsurance.com</a>

`
        },
        { 
            name: "Foremost Insurance", 
            img: "../assets/logo6.PNG", 
            details: `
                <img src="../assets/logo6.PNG" alt="Another Insurance">
                <<strong>Customer Service</strong><br>
Foremost Signature: (844) 296-3790<br>
Foremost Classic: (800) 527-3905<br><br>

<strong>Claims</strong><br>
Website: <a href="https://www.foremost.com/claims" target="_blank">Claims</a><br>
Foremost Signature: (800) 854-6011<br>
Foremost Classic: (800) 527-3907<br><br>

<strong>Billing</strong><br>
Website: <a href="https://www.myforemostaccount.com/fmcss/payment/findpolicy" target="_blank">Pay Your Bill</a><br>
Foremost Signature: (800) 296-3790<br>
Foremost Classic: (800) 532-4221<br><br>

<strong>Mobile Apps</strong><br>
Google Play Store: <a href="https://play.google.com/store/apps/details?id=com.foremost.app&pli=1" target="_blank">Download App</a><br>
Apple App Store: <a href="https://apps.apple.com/us/app/foremost-insurance-mobile/id1560257854" target="_blank">Download App</a><br><br>

<strong>Address</strong><br>
P.O. Box 0915<br>
Carol Stream, IL 60132-0915<br>
<a href="https://www.foremost.com" target="_blank">www.foremost.com</a>

`
        },
        { 
            name: "Founders Insurance", 
            img: "../assets/logo7.PNG", 
            details: `
                <img src="../assets/logo7.PNG" alt="Another Insurance">
                <strong>Customer Service</strong><br>
Website: <a href="https://www.foundersinsurance.com/contact" target="_blank">View Your Policy</a><br>
General: (847) 768-0040<br><br>

<strong>Claims</strong><br>
Website: <a href="https://myaccount.foundersinsurance.com/MVC/OnlineLossPublic/Home/Index" target="_blank">Claims</a><br>
Claims: (888) 676-4342<br><br>

<strong>Billing</strong><br>
Website: <a href="https://myaccount.foundersinsurance.com/Public/PaymentOptions.aspx" target="_blank">Make a Payment</a><br><br>

<strong>Address</strong><br>
1645 E. Birchwood Ave.<br>
Des Plaines, IL 60018<br>
<a href="https://www.foundersinsurance.com" target="_blank">www.foundersinsurance.com</a>


`
        },
        { 
            name: "Great American Insurance", 
            img: "../assets/logo8.PNG", 
            details: `
                <img src="../assets/logo8.PNG" alt="Another Insurance">
                <strong>Customer Service</strong><br>
Service: (800) 545-4269<br><br>

<strong>Claims</strong><br>
Website: <a href="https://www.greatamericaninsurancegroup.com/about-us/business-operations/division/specialty-human-services/report-a-claim" target="_blank">Claims</a><br>
Claims: (800) 854-3649<br><br>

<strong>Address</strong><br>
P.O. Box 5425<br>
Cincinnati, OH 45201-5425<br>
<a href="https://www.greatamericaninsurancegroup.com" target="_blank">www.greatamericaninsurancegroup.com</a>



`
        },
        { 
            name: "Great West Causality Company Insurance", 
            img: "../assets/logo9.PNG", 
            details: `
                <img src="../assets/logo9.PNG" alt="Another Insurance">
                <strong>Customer Service</strong><br>
General: (800) 228-8602<br>
Website: <a href="https://portal.gwccnet.com/truck-insurance/myportal" target="_blank">Client Login</a><br><br>

<strong>Claims</strong><br>
Claims: (800) 228-8040<br><br>

<strong>Billing</strong><br>
Website: <a href="https://internet.speedpay.com/greatwest/?redirect=false&client_alias=greatwest&client_id=greatwest#/login/guest" target="_blank">Make a Payment</a><br><br>

<strong>Address</strong><br>
1100 West 29th Street<br>
Box 277<br>
South Sioux City, NE 68776<br>
<a href="https://ssl.gwccnet.com" target="_blank">ssl.gwccnet.com</a>


`
        },
        { 
            name: "Lloyds of London Insurance", 
            img: "../assets/logo10.PNG", 
            details: `
                <img src="../assets/logo10.PNG" alt="Another Insurance">
                <strong>Claims</strong><br>
Website: <a href="https://www.lloyds.com/about-lloyds/our-market/claims" target="_blank">Claims</a><br><br>

<strong>Address</strong><br>
New York, NY<br>
<a href="https://www.lloyds.com" target="_blank">www.lloyds.com</a>


`
        },
        { 
            name: "MetLife Insurance", 
            img: "../assets/logo11.PNG", 
            details: `
                <img src="../assets/logo11.PNG" alt="Another Insurance">
                <strong>Customer Service</strong><br>
Service: (800) 638-2886<br><br>

<strong>Claims</strong><br>
Website: <a href="https://www.metlife.com/support-and-manage/file-a-claim/" target="_blank">Claims</a><br>
Claims: (800) 854-6011<br><br>

<strong>Billing</strong><br>
Website: <a href="https://myaccounts.metlife.com/" target="_blank">Pay Your Bill</a><br>



`
        }, { 
            name: "National Indemnity Company Insurance", 
            img: "../assets/logo12.PNG", 
            details: `
                <img src="../assets/logo12.PNG" alt="Another Insurance">
                <strong>Customer Service</strong><br>
General: (866) 720-7861<br><br>

<strong>Claims</strong><br>
Website: <a href="https://www.nationalindemnity.com/Claims.aspx" target="_blank">Claims</a><br>
Claims: (800) 356-5750<br><br>

<strong>Billing</strong><br>
Website: <a href="https://www.nationalindemnity.com/expresspay/policyselection.aspx" target="_blank">Make a Payment</a><br>

<strong>Address</strong><br>
3024 Harney Street
Omaha, NE 68131-3580
<br>
<a href="https://www.nationalindemnity.com/" target="_blank">https://www.nationalindemnity.com/</a>


`
        },
        { 
            name: "National wide Insurance", 
            img: "../assets/logo13.PNG", 
            details: `
                <img src="../assets/logo13.PNG" alt="Another Insurance">
                <strong>Customer Service</strong><br>
Website: <a href="https://www.nationwide.com/personal/member-services/login-to-account" target="_blank">Access Your Account</a><br>
Website Support: (877) 304-1065<br><br>

<strong>Claims</strong><br>
Website: <a href="https://www.nationwide.com/insurance-claims/" target="_blank">Claims</a><br>
Claims: (800) 421-3535<br><br>

<strong>Billing</strong><br>
Website: <a href="https://www.nationwide.com/personal/member-services/pay-bill" target="_blank">Make a Payment</a><br>
Billing: (877) 262-0247<br><br>

<strong>Mobile Apps</strong><br>
Google Play Store: <a href="https://play.google.com/store/apps/details?id=com.nationwide.mobile.android.nwmobile" target="_blank">Download App</a><br>
Apple App Store: <a href="https://apps.apple.com/us/app/nationwide-mobile/id311627534" target="_blank">Download App</a><br>



`
        },
        { 
            name: "Norland Insurance", 
            img: "../assets/logo14.PNG", 
            details: `
                <img src="../assets/logo14.PNG" alt="Another Insurance">
                <strong>Northland Insurance</strong><br>
P.O. Box 64816<br>
Mail Code 103N<br>
St. Paul, MN 55164-0816<br>
Website: <a href="https://www.northlandins.com" target="_blank">www.northlandins.com</a><br><br>

<strong>Customer Service</strong><br>
General: (800) 237-9334<br><br>

<strong>Claims</strong><br>
Website: <a href="https://www.northlandins.com/reportclaim.asp" target="_blank">Claims</a><br>
Phone: (800) 328-5972<br><br>


`
        },
        { 
            name: "Progressive Insurance", 
            img: "../assets/logo16.PNG", 
            details: `
                <img src="../assets/logo16.PNG" alt="Another Insurance">
<strong>Progressive Insurance</strong><br>
Dept. 0561<br>
Carol Stream, IL 60132-0561<br>
Website: <a href="https://www.progressive.com" target="_blank">www.progressive.com</a><br><br>

<strong>Customer Service</strong><br>
Website: <a href="https://www.progressive.com/manage-policy" target="_blank">Manage Your Policy</a><br>
Service: 888-671-4405<br>
Customers in California: (800) 300-3693<br>
Roadside Assistance: 1-800-776-4737<br><br>

<strong>Claims</strong><br>
Website: <a href="https://www.progressive.com/claims" target="_blank">File a Claim</a><br>
Claims: 1-800-776-4737<br><br>

<strong>Billing</strong><br>
Website: <a href="https://account.apps.progressive.com/access/ez-payment/policy-info?cntgrp=A" target="_blank">Pay Your Bill</a><br><br>

<strong>Online Account Access</strong><br>
Website: <a href="https://www.progressive.com/manage-policy/" target="_blank">Login to Your Account</a><br><br>

<strong>Mobile Apps</strong><br>
Google Play Store: <a href="https://play.google.com/store/apps/details?id=com.phonevalley.progressive" target="_blank">Download App</a><br>
Apple App Store: <a href="https://apps.apple.com/us/app/progressive/id349731802" target="_blank">Download App</a><br><br>



`
        },
        { 
            name: "The HatFord Insurance", 
            img: "../assets/logo18.PNG", 
            details: `
                <img src="../assets/logo18.PNG" alt="Another Insurance">
<strong>The Hartford</strong><br>
One Hartford Plaza<br>
Hartford, CT 06155<br>
Website: <a href="https://www.thehartford.com" target="_blank">www.thehartford.com</a><br><br>

<strong>Customer Service</strong><br>
Website: <a href="https://www.thehartford.com/contact-us" target="_blank">Contact</a><br>
AARP Policyholders: (877) 805-9918<br>
Commercial Auto: (800) 327-3636<br>
Commercial Property: (800) 327-3636<br>
General Liability: (800) 327-3636<br>
Workers' Comp: (800) 327-3636<br>
Personal Claims: (800) 243-5860<br>
Flood Claims: (800) 243-5860<br>
Glass Claims: 800-892-8484<br><br>

<strong>Claims</strong><br>
Submit a Claim: <a href="https://www.thehartford.com/claims" target="_blank">Service and Claims</a><br><br>

<strong>Billing</strong><br>
Pay Your Bill: <a href="https://service.thehartford.com/consumer/public/service/expresspay" target="_blank">Auto/Home</a><br>
Pay Your Bill: <a href="https://business.thehartford.com/expresspay" target="_blank">Business</a><br><br>



`
        },
        { 
            name: "Tower Hill Insurance", 
            img: "../assets/logo19.PNG", 
            details: `
                <img src="../assets/logo19.PNG" alt="Another Insurance">
<strong>Tower Hill Insurance</strong><br>
Post Office Box 147018<br>
Gainesville, FL 32614<br>
Website: <a href="https://www.thig.com" target="_blank">www.thig.com</a><br><br>

<strong>Customer Service</strong><br>
Service: (800) 342-3407<br><br>

<strong>Claims</strong><br>
Claims: (800) 216-3711<br>
Website: <a href="https://www.thig.com/claims/" target="_blank">File a Claim</a><br><br>

<strong>Billing</strong><br>
Website: <a href="https://customerportal.thig.com/#/user/policy-type" target="_blank">Make A Payment</a><br><br>

<strong>Customer Portal</strong><br>
Website: <a href="https://customerportal.thig.com/#/user/policy-type" target="_blank">Customer Portal</a><br><br>


`
        },{ 
            name: "Travelers Insurance", 
            img: "../assets/logo17.PNG", 
            details: `
                <img src="../assets/logo17.PNG" alt="Another Insurance">
<strong>Travelers Insurance</strong><br>
PO BOX 660307<br>
Dallas, TX 75266-0307<br>
Website: <a href="https://www.travelers.com" target="_blank">www.travelers.com</a><br><br>

<strong>Customer Service</strong><br>
Website: <a href="https://selfservice.travelers.com/login/#/" target="_blank">Member Login</a><br>
Customer Service: (800) 252-4633<br><br>

<strong>Claims</strong><br>
Website: <a href="https://www.travelers.com/claims/file-claim" target="_blank">Claims</a><br>
Claims: (800) 252-4633<br><br>

<strong>Billing</strong><br>
Website: <a href="https://www.travelers.com/pay-your-bill" target="_blank">Pay Your Bill</a><br><br>


`
        },
    ];

    // Populate dropdown
    function populateDropdown() {
        const dropdown = document.getElementById("logoDropdown");
        logos.forEach((logo, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = logo.name;
            dropdown.appendChild(option);
        });
    }

    // Update info section
    function updateInfo() {
        const selectedIndex = document.getElementById("logoDropdown").value;
        document.getElementById("infoSection").innerHTML = logos[selectedIndex].details;
    }

    // Initialize dropdown
    populateDropdown();