import propTypes from 'prop-types'

function Form({submitHandler,formHandler,formInputs}){
  
    return (
    <form onSubmit={submitHandler} className='Submit'>
      <div className="buttonSection">
      <button type="submit" className="submitButton">submit</button>
      </div>
      <hr/>

      
      <div className='formFields'>
      <p className='sectionHeading'>Personal Details</p>
      <div className='personalDetails'>
      <div className='BothnameAndGender'>
        <div >
      <label htmlFor='firstName' className="nameLabel">First Name   </label>
      <input type='text' placeholder='First name' id='firstName' value={formInputs.firstName} onChange={formHandler} required />
        </div>
        <div>
      <label htmlFor='lastName' className='nameLabel'>Last Name  </label>
      <input type='text' placeholder='Last name' id='lastName' value={formInputs.lastName} onChange={formHandler} required/>
        </div>
        <div>
      <label htmlFor='gender' className='gender'>Gender</label>
      <select placeholder='gender' id='gender'  onChange={formHandler} required>
      <option value='Male'>Male</option>
      <option value='Female'>Female</option>
      <option value='LGBTQA+'>LGBTQA+</option>
      </select>
        </div>
      </div>
      <div className='emailPhoneDOB'>
        <div>
          <label htmlFor='email' className='email'>Email</label>
          <input type='email' placeholder='email@xyz' id='email' value={formInputs.email} onChange={formHandler} required/>
        </div>
        <div>
          <label htmlFor='phone' className='phone'>Phone</label>
          <input type='tel' placeholder='123-456-7890' id='phone' value={formInputs.phone} onChange={formHandler} required/>
        </div>
        <div>
          <label htmlFor='DOB' className='dob'>DOB</label>
          <input type='date' placeholder='DOB' id='DOB' value={formInputs.DOB} onChange={formHandler} required/>
        </div>
      </div>
      </div>

      <p>_______________________________________________________________________________________________________________________________</p>

      <p className='sectionHeading'>Educational Details</p>
      <div className='educationalDetails'>
        <div className='collegeNameAndYOP'>
          <div>
          <label htmlFor='collegeName' className='collegeName'>College </label>
          <input type='text' placeholder='college name' id='collegeName' value={formInputs.collegeName} onChange={formHandler}/>
          </div>
          <div>
          <label htmlFor='YOP' className='yop'>YOP </label>
          <input type='number' placeholder='2025' id='YOP' value={formInputs.YOP} onChange={formHandler}/>
          </div>
        </div>
        <div className='courseAndStream'>
          <div>
          <label htmlFor='course' className='course'>Course </label>
          <select placeholder='course' id='course'  onChange={formHandler}>
            <option value='B.Tech'>B.Tech</option>
            <option value='MBA'>MBA</option>
            <option value='Bio Tech'>Bio Tech</option>
            <option value='MBBS'>MBBS</option>
            <option value='LAW'>LAW</option>
            <option value='Other'>other</option>
          </select>
          </div>
          <div>
          <label htmlFor='stream' className='stream'>Stream </label>
          <select placeholder='stream' id='stream'  onChange={formHandler}>
            <option value='CSE'>CSE</option>
            <option value='IT'>IT</option>
            <option value='Other'>other</option>
          </select>
          </div>
        </div>
      </div>

      <p>______________________________________________________________________________________________________________________________</p>


      <p className='sectionHeading'>professional Details</p>
      <div className='professionalDetails'>
        <div className='companyNameAndjoiningDate'>
          <div>
          <label htmlFor='companyName' className='companyName'>Company </label>
          <input type='text' placeholder='company name' id='companyName' value={formInputs.companyName} onChange={formHandler}/>
          </div>
          <div>
          <label htmlFor='joiningDate' className='yoj'>Joining Date </label>
          <input type='number' placeholder='2000' id='joiningDate' value={formInputs.joiningDate} onChange={formHandler}/>
          </div>
        </div>
        <div className='positionTitleAndResponsibility'>
          <div>
          <label htmlFor='positionTitle' className='positionTitle'>Position Title </label>
          <input type='text' placeholder='title' id='positionTitle' value={formInputs.positionTitle} onChange={formHandler}/>
          </div>
          <div>
          <label htmlFor='responsibility' className='responsibility'>Responsibility </label>
          <input type='text' placeholder='responsibility' id='responsibility' value={formInputs.responsibility} onChange={formHandler}/>
          </div>
        </div>
      </div>
      
      </div>
      <hr/>
    </form>
    );
  }



  function Resume({resetHandler, details}) {
     return(
        <>
         <div className='buttonSection'>
          <button onClick={resetHandler} className="reset">reset</button>
          </div>
          <hr/><hr/>
          <div className='resumePage'>
            <h1 className='resumeName'>{details.firstName.toUpperCase()} {details.lastName.toUpperCase()}</h1>
             <h6 className='resumeEmail'>{details.email}        |          {details.phone}</h6>
             <h4 className='resumeGender'>Gender : {details.gender}</h4>
             <h4 className='resumeDOB'>DOB: {details.DOB}</h4>
          </div>
          <hr/>
          <h2 className='resumeEducation'>Education</h2>
          <p className='resumeUnderline'>______________</p>
          <h3 className='resumeCollegeName'>{details.collegeName}</h3>
          <h5 className='resumeCourseAndStream'>Course : {details.course.toUpperCase()}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Stream: {details.stream.toUpperCase()}</h5>
          <h5 className='resumepassingYear'>Year of passing : {details.YOP}</h5>
          <p className='resumeUnderline'>____________________________________________________________________________________________________________________</p>
          <h2 className='resumeProfessionSection'>Professional Details</h2>
          <p className='resumeUnderline'>_________________________</p>
          <h3 className='resumeCompanyName'>{details.companyName.toUpperCase()}</h3>
          <h4 className='resumePosition'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Position : {details.positionTitle.toUpperCase()}</h4>
          <h4 className='resumeResponsibility'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Responsibility: {details.responsibility}</h4>
          <h5 className='resumeYearOfJoining'>Year of Joining: {details.joiningDate}</h5>
          <p className='resumeUnderline'>____________________________________________________________________________________________________________________</p>
          <hr/>
        </>
     );
  };

  Form.propTypes = {
     submitHandler : propTypes.func.isRequired,
     formHandler : propTypes.func.isRequired,
     formInputs : propTypes.object.isRequired,
  }
  Resume.propTypes = {
    resetHandler : propTypes.func.isRequired,
    details : propTypes.object.isRequired,
  };
  export {Form,Resume};