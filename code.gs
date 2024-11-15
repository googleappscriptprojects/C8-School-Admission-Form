
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('School Admission Form');
}
function submitForm(formData) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Paste Your Sheet Name');
    sheet.appendRow([
      formData.fullName,
      formData.dateOfBirth,
      formData.gender,
      formData.placeOfBirth,
      formData.nationality,
      formData.currentAddress,
      formData.permanentAddress,
      formData.contactNumber,
      formData.emailAddress,
      formData.gradeApplyingFor,
      formData.preferredStartDate,
      formData.previousSchoolName,
      formData.previousGradeCompleted,
      formData.parentFullName,
      formData.relationshipToStudent,
      formData.parentOccupation,
      formData.parentContactNumber,
      formData.parentEmailAddress,
      formData.parentAddress,
      formData.emergencyContact,
      formData.siblingInfo,
      formData.primaryLanguage,
      formData.secondaryLanguage,
      formData.maritalStatus,
      formData.bloodGroup,
      formData.knownAllergies,
      formData.chronicIllnesses,
      formData.vaccinationRecord,
      formData.healthInsurance,
      formData.doctorName,
      formData.doctorContact,
      formData.academicGrades,
      formData.achievements,
      formData.extracurricular,
      formData.specialEducation,
      formData.learningDisabilities,
      formData.counselingSupport,
      formData.agreeToRules,
      formData.consentPhotos,
      formData.permissionTrips,
      formData.acknowledgeFees,
      new Date() // Timestamp
    ]);
    
    return { status: 'SUCCESS', message: 'Form submitted successfully!' };
  } catch (error) {
    return { status: 'ERROR', message: error.message };
  }
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
