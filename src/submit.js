export default function TextDecoderStream(){
    document.getElementById("maincontent").innerHTML = ` 
    <h2>Submission form</h2>
    <form action="" class="subform">
        <label for="promoterFirst">First name of the promoter:</label>
        <input type="text" name="promoterFirst" id="promoterFirst">
        <label for="promoterLast">Last Name of the promoter:</label>
        <input type="text" name="promoterLast" id="promoterLast">
        <label for="promoterCompany">Company:</label>
        <input type="text" name="promoterCompany" id="promoterCompany">
        <label for="promoterEmail">Email (additional emails can be added in notes below):</label>
        <input type="email" name="promoterEmail" id="promoterEmail">
        <label for="incidentDate">Date of incident</label>
        <input type="date" name="incidentDate" id="incidentDate">
        <label for="incidentDescription">Please provide a brief description of the incident:</label>
        <textarea name="incidentDescription" id="incidentDescription" cols="30" rows="10"></textarea>
        <input type="submit" value="Submit" id="submitButton2">
    </form>
`;
}