import React,{Component} from 'react';

//const AgreementEmail = (props) =>{<p>test</p>};
 
class AgreementDomain extends Component {
  constructor(props){
      super(props);
      this.state = { 
          buttons : {
              name : ["userDetails", "domainDetails","subscriptions"],
              text : ["User Details", "Domain Details","Subscriptions"],
          }
       }
  }

  render() { 
      return ( 
        <React.Fragment>
        <h3>YOUR ACCOUNT:</h3>
            You must create an account to use the Services (&quot;Account&quot;). You are solely responsible for maintaining, securing, 
            updating, and keeping strictly confidential all login IDs and passwords, and for all access to and use of your Account by you or any third party.<br />
          <h4>ACCOUNT CONTACT INFORMATION AND DOMAIN NAME WHOIS INFORMATION:</h4>
            You must provide certain current, complete and accurate information about you with respect to your Account information and 
            with respect to the WHOIS information for your domain name(s). Within seven (7) days of any change to such information, you 
            must update such information as needed to keep it current, complete and accurate. You must submit the following with respect 
            to you, the administrative, technical, and billing contacts for your domain name registration(s) and other Services: name, 
            postal address, e-mail address, voice telephone number, and where available, fax number. The type of information you are 
            required to provide may change and you must provide such information and keep your Account information current. Not providing 
            requested information may prevent you from obtaining all Services.<br />
            You may provide information regarding the name-servers assigned to your domain name(s) and, if we are providing name-server 
            services to you, the DNS settings for the domain name. If you do not provide complete name-server information, or if you purchase 
            &quot;Name Only&quot; Services, we may supply this information (and point your domain name to a website of our choosing) until such time as you 
            elect to supply the name-server information or until such time as you elect to upgrade from &quot;Name Only&quot; Services.<br />
          <h4>OBLIGATIONS RELATING TO THE ACCOUNT AND WHOIS CONTACT INFORMATION:</h4>
            If, in obtaining Services, you provide information about or on behalf of a third party, you represent and warrant that you have (a) 
            provided notice to that third party of the disclosure and use of that party's information as set forth in this Agreement, and (b) 
            obtained the third party's express written consent to the disclosure and use of that party's information as set forth in this Agreement.<br />
            You represent and warrant that the statements in your application are true and that no Services are being procured for any unlawful or 
            abusive purpose, including but not limited to the infringement of any intellectual property right or other right; the distribution of malware; 
            the abusive operation of botnets; phishing, fraudulent or deceptive practices; the unauthorized transfer to yourself or any other party of any 
            domain name or Services; counterfeiting; or any other activity in violation of any laws, rules, or regulations (the &quot;Illegal Uses&quot;). 
            Providing inaccurate or unreliable information, failing to update information within seven (7) days of any change, engaging in any Illegal Uses, 
            or failing to respond for over fifteen (15) days to inquiries by us concerning the accuracy of Account and WHOIS contact information will constitute 
            an incurable material breach of this Agreement and be a basis for suspension and/or cancellation of the Services.<br />
            You are responsible for regularly monitoring email sent to the email address in your Account. You may lose your rights to the domain name(s) or 
            your right to receive the Services if you do not respond appropriately and timely to an email sent in conjunction therewith.<br />
          <h4>ACCESSING YOUR ACCOUNT:</h4>
            In order to change any of your Account or to update or rectify any inaccurate domain name WHOIS information, you must access your Account. 
            It is your duty to safeguard your Account login identifier and password from any unauthorized use. Any person in possession of your Account 
            login identifier and password will have both the ability and your authorization to modify your Account and domain name information, initiate 
            transfers of your domain name(s) to other registrars, initiate registrant changes to your domain names which may terminate your rights to use 
            such domain name(s), update DNS changes to your domain name(s) which may result in changes to the content associated with your domain name(s) 
            and take other actions which may affect or terminate your rights and access to your domain name(s) and/or the Services.<br />
            We will take reasonable precautions to protect the information we obtain from you from loss, misuse, unauthorized access or disclosure, 
            alteration or destruction of that information and such reasonable precautions include procedures for releasing Account access information to 
            parties who claim to have lost Account access information. If we take reasonable precautions in relation thereto, IN NO EVENT SHALL WE BE LIABLE 
            IF SUCH REASONABLE PRECAUTIONS DO NOT PREVENT THE UNAUTHORIZED USE OR MISUSE OF YOUR ACCOUNT IDENTIFIER OR PASSWORD AND, EVEN IF WE FAIL TO 
            TAKE REASONABLE PRECAUTIONS, OUR LIABILITY UNDER ANY CIRCUMSTANCES SHALL BE LIMITED BY THE LIMITATION OF LIABILITY PROVISION FOUND IN PARAGRAPH 13 BELOW IN THIS AGREEMENT.<br />
            If you contact us alleging that a third party has unauthorized access to your Account or domain names, we may charge you administrative fees, 
            currently set at fifty dollars (US$50) per hour, for our time spent in relation to the matter, regardless of whether or not we return control 
            over the Account and/or domain name(s) to you. You will indemnify us for any reasonable attorneys&rsquo; fees and costs we may incur in relation 
            to the matter, even if those fees and costs accrue as a result of defending an action, or responding to a threat of an action, initiated by you or a third party.<br />
          <h4>SHARING OF WHOIS INFORMATION:</h4>
            We will make available the domain name registration information you provide or that we otherwise maintain to 
            the following parties: ICANN, any ICANN-authorized escrow service, the registry administrator(s), and to other third parties as ICANN and applicable 
            laws may require or permit (including through web-based and other on-line WHOIS lookup systems), whether during or after the term of your domain name 
            registration services of the domain name. Where permitted by law, you irrevocably waive any and all claims and causes of action you may have arising 
            from such disclosure or use of such information. We may make publicly available, or directly available to third parties, some, or all, of the information 
            you provide, for purposes of inspection (such as through our WHOIS service) or for targeted marketing and other purposes as required or permitted by 
            applicable laws, including by way of bulk WHOIS data access provided to third parties who enter into a bulk WHOIS data access agreement with us.<br />
            ICANN may establish or modify the guidelines, limits and/or requirements that relate to the amount and type of information that we may or must make 
            available to the public or to private entities, and the manner in which such information is made available. Information regarding ICANN's guidelines 
            and requirements regarding WHOIS can be found at http://www.icann.org/registrars/wmrp.htm and elsewhere on the ICANN website at http://www.icann.org/.
        </React.Fragment>
          );
  }
}

export default AgreementDomain;