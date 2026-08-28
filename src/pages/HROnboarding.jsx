import React, { useState, useEffect, useRef } from "react";
import "./HROnboarding.css";
import logoImage from "../images/logos/cyberaries-logo.png";

const initialForm = {
    recordType: "Intern",

    fullName: "",
    preferredName: "",
    personalEmail: "",
    phoneNumber: "",
    dateOfBirth: "",
    gender: "",
    currentResidentialAddress: "",
    permanentAddress: "",
    city: "",
    state: "",
    pinCode: "",

    emergencyContactName: "",
    emergencyContactRelationship: "",
    emergencyContactPhone: "",

    highestQualification: "",
    collegeUniversity: "",
    degreeCourse: "",
    branchSpecialization: "",
    currentYearSemester: "",
    graduationYear: "",
    cgpaPercentage: "",
    professionalCertifications: "",

    previousExperience: "No",
    previousOrganization: "",
    previousDesignation: "",
    previousStartDate: "",
    previousEndDate: "",
    previousDuration: "",
    keyResponsibilities: "",

    bankAccountHolderName: "",
    bankName: "",
    accountNumber: "",
    ifsc: "",
    pan: "",
    uanPfDetails: "",
    esicDetails: "",

    declarationAccuracy: false,
    hrProcessingConsent: false,
    documentAuthenticity: false,
    policyAcknowledgement: false,
    confirmation: false,
};

const documentFields = [
    ["resume", "Resume / CV", true],
    ["profilePhoto", "Profile Photograph", true],
    ["panCard", "PAN Card", true],
    ["identityProof", "Identity Proof", true],
    ["addressProof", "Address Proof", true],
    ["educationalCertificates", "Educational Certificates / Marksheets", true],
    ["previousEmploymentDocuments", "Previous Employment / Experience Documents", false],
    ["bankProof", "Bank Proof / Cancelled Cheque", true],
    ["otherDocuments", "Other Onboarding Documents", false],
];

function HROnboarding() {
    const [form, setForm] = useState(initialForm);
    const [files, setFiles] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");

    const [previewFile, setPreviewFile] = useState(null); // { url, type, name }
    const objectUrlsRef = useRef([]);

    const createLocalUrl = (file) => {
        const url = URL.createObjectURL(file);
        objectUrlsRef.current.push(url);
        return url;
    };

    const cleanLocalUrls = () => {
        objectUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
        objectUrlsRef.current = [];
    };

    useEffect(() => {
        return () => {
            cleanLocalUrls();
        };
    }, []);

    const handleViewFile = (file) => {
        const url = createLocalUrl(file);
        setPreviewFile({
            url,
            type: file.type.startsWith("image/")
                ? "image"
                : file.type === "application/pdf"
                ? "pdf"
                : "other",
            name: file.name,
        });
    };

    const handleClosePreview = () => {
        setPreviewFile(null);
    };

    const handleRemoveFile = (fieldName, fileIndex) => {
        setFiles((prev) => {
            const currentFiles = prev[fieldName] || [];
            const updated = currentFiles.filter((_, idx) => idx !== fileIndex);
            return {
                ...prev,
                [fieldName]: updated,
            };
        });
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleFileChange = (e, fieldName) => {
        const selectedFiles = Array.from(e.target.files || []);

        setFiles((prev) => ({
            ...prev,
            [fieldName]: selectedFiles,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setSubmitting(true);

        try {
            const formData = new FormData();

            // Add all text/form fields
            Object.entries(form).forEach(([key, value]) => {
                formData.append(
                    key,
                    value === null || value === undefined
                        ? ""
                        : String(value)
                );
            });

            // Add uploaded documents
            Object.entries(files).forEach(
                ([fieldName, selectedFiles]) => {

                    if (!Array.isArray(selectedFiles)) {
                        return;
                    }

                    selectedFiles.forEach((file) => {

                        if (file instanceof File) {
                            formData.append(
                                fieldName,
                                file,
                                file.name
                            );
                        }
                    });
                }
            );

            console.log("Submitting HR form...");

            const response = await fetch(
                "http://localhost:5000/api/hr/submit",
                {
                    method: "POST",
                    body: formData
                }
            );

            console.log(
                "Backend response status:",
                response.status
            );

            const responseText = await response.text();

            console.log(
                "Backend response:",
                responseText
            );

            let result;

            try {
                result = JSON.parse(responseText);
            } catch {
                throw new Error(
                    "Backend returned an invalid response."
                );
            }

            if (!response.ok || !result.success) {
                throw new Error(
                    result.error ||
                    "Unable to submit the form."
                );
            }

            console.log(
                "HR submission successful:",
                result
            );

            setSubmitted(true);

        } catch (err) {

            console.error(
                "HR submission error:",
                err
            );

            setError(
                err.message ||
                "Unable to submit the form. Please try again."
            );

        } finally {

            setSubmitting(false);

        }
    };

    if (submitted) {
        return (
            <main className="hr-page">
                <section className="hr-success">
                    <img
                        src={logoImage}
                        alt="CyberAries Logo"
                        className="hr-success-logo"
                    />

                    <h1 className="hr-success-title">Information Submitted</h1>

                    <p>
                        Your information has been successfully submitted to the
                        CyberAries HR team.
                    </p>

                    <p className="hr-success-note">
                        Please keep this page open only if you need to review your
                        submission confirmation.
                    </p>
                </section>
            </main>
        );
    }

    return (
        <main className="hr-page">
            <section className="hr-header">
                <div className="hr-brand-container">
                    <span className="hr-brand-text">
                        <span className="brand-cyber">Cyber</span>
                        <span className="brand-aries">Aries</span>
                        <span className="brand-divider">•</span>
                        <span className="brand-hr">HR</span>
                    </span>
                </div>

                <h1>Employee & Intern Onboarding</h1>

                <p>
                    Please provide the following information accurately. This form is
                    intended for official onboarding and HR records.
                </p>

                <div className="hr-record-switch">
                    <label className={form.recordType === "Intern" ? "active" : ""}>
                        <input
                            type="radio"
                            name="recordType"
                            value="Intern"
                            checked={form.recordType === "Intern"}
                            onChange={handleChange}
                        />
                        Intern
                    </label>

                    <label className={form.recordType === "Employee" ? "active" : ""}>
                        <input
                            type="radio"
                            name="recordType"
                            value="Employee"
                            checked={form.recordType === "Employee"}
                            onChange={handleChange}
                        />
                        Employee
                    </label>
                </div>
            </section>

            <form className="hr-form" onSubmit={handleSubmit}>
                <FormSection
                    number="01"
                    title="Personal Information"
                    description="Basic personal and contact information."
                >
                    <div className="hr-grid">
                        <Input
                            label="Full Name"
                            name="fullName"
                            value={form.fullName}
                            onChange={handleChange}
                            required
                        />

                        <Input
                            label="Preferred Name"
                            name="preferredName"
                            value={form.preferredName}
                            onChange={handleChange}
                        />

                        <Input
                            label="Personal Email Address"
                            type="email"
                            name="personalEmail"
                            value={form.personalEmail}
                            onChange={handleChange}
                            required
                        />

                        <Input
                            label="Phone Number"
                            name="phoneNumber"
                            value={form.phoneNumber}
                            onChange={handleChange}
                            required
                        />

                        <Input
                            label="Date of Birth"
                            type="date"
                            name="dateOfBirth"
                            value={form.dateOfBirth}
                            onChange={handleChange}
                        />

                        <Select
                            label="Gender"
                            name="gender"
                            value={form.gender}
                            onChange={handleChange}
                            options={["Male", "Female", "Other", "Prefer not to say"]}
                        />

                        <Input
                            label="City"
                            name="city"
                            value={form.city}
                            onChange={handleChange}
                        />

                        <Input
                            label="State"
                            name="state"
                            value={form.state}
                            onChange={handleChange}
                        />

                        <Input
                            label="PIN Code"
                            name="pinCode"
                            value={form.pinCode}
                            onChange={handleChange}
                        />
                    </div>

                    <Textarea
                        label="Current Residential Address"
                        name="currentResidentialAddress"
                        value={form.currentResidentialAddress}
                        onChange={handleChange}
                    />

                    <Textarea
                        label="Permanent Address"
                        name="permanentAddress"
                        value={form.permanentAddress}
                        onChange={handleChange}
                    />

                    <h3 className="hr-subheading">Emergency Contact</h3>

                    <div className="hr-grid">
                        <Input
                            label="Emergency Contact Name"
                            name="emergencyContactName"
                            value={form.emergencyContactName}
                            onChange={handleChange}
                        />

                        <Input
                            label="Relationship"
                            name="emergencyContactRelationship"
                            value={form.emergencyContactRelationship}
                            onChange={handleChange}
                        />

                        <Input
                            label="Emergency Contact Phone"
                            name="emergencyContactPhone"
                            value={form.emergencyContactPhone}
                            onChange={handleChange}
                        />
                    </div>
                </FormSection>

                <FormSection
                    number="02"
                    title="Education"
                    description="Academic background and qualifications."
                >
                    <div className="hr-grid">
                        <Input
                            label="Highest Qualification"
                            name="highestQualification"
                            value={form.highestQualification}
                            onChange={handleChange}
                        />

                        <Input
                            label="College / University / Institution"
                            name="collegeUniversity"
                            value={form.collegeUniversity}
                            onChange={handleChange}
                        />

                        <Input
                            label="Degree / Course"
                            name="degreeCourse"
                            value={form.degreeCourse}
                            onChange={handleChange}
                        />

                        <Input
                            label="Branch / Specialization"
                            name="branchSpecialization"
                            value={form.branchSpecialization}
                            onChange={handleChange}
                        />

                        <Input
                            label="Current Year / Semester"
                            name="currentYearSemester"
                            value={form.currentYearSemester}
                            onChange={handleChange}
                        />

                        <Input
                            label="Graduation Year"
                            name="graduationYear"
                            value={form.graduationYear}
                            onChange={handleChange}
                        />

                        <Input
                            label="CGPA / Percentage"
                            name="cgpaPercentage"
                            value={form.cgpaPercentage}
                            onChange={handleChange}
                        />
                    </div>

                    <Textarea
                        label="Professional Certifications (if applicable)"
                        name="professionalCertifications"
                        value={form.professionalCertifications}
                        onChange={handleChange}
                    />
                </FormSection>

                <FormSection
                    number="03"
                    title="Previous Experience"
                    description="Tell us about previous employment or internship experience."
                >
                    <div className="hr-experience-choice">
                        <span>Previous work / internship experience?</span>

                        <label>
                            <input
                                type="radio"
                                name="previousExperience"
                                value="No"
                                checked={form.previousExperience === "No"}
                                onChange={handleChange}
                            />
                            No
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="previousExperience"
                                value="Yes"
                                checked={form.previousExperience === "Yes"}
                                onChange={handleChange}
                            />
                            Yes
                        </label>
                    </div>

                    {form.previousExperience === "Yes" && (
                        <div className="hr-grid">
                            <Input
                                label="Previous Organization / Company"
                                name="previousOrganization"
                                value={form.previousOrganization}
                                onChange={handleChange}
                            />

                            <Input
                                label="Previous Designation / Role"
                                name="previousDesignation"
                                value={form.previousDesignation}
                                onChange={handleChange}
                            />

                            <Input
                                label="Start Date"
                                type="date"
                                name="previousStartDate"
                                value={form.previousStartDate}
                                onChange={handleChange}
                            />

                            <Input
                                label="End Date"
                                type="date"
                                name="previousEndDate"
                                value={form.previousEndDate}
                                onChange={handleChange}
                            />

                            <Input
                                label="Duration"
                                name="previousDuration"
                                value={form.previousDuration}
                                onChange={handleChange}
                            />
                        </div>
                    )}

                    {form.previousExperience === "Yes" && (
                        <Textarea
                            label="Key Responsibilities"
                            name="keyResponsibilities"
                            value={form.keyResponsibilities}
                            onChange={handleChange}
                        />
                    )}
                </FormSection>

                <FormSection
                    number="04"
                    title="Bank & Statutory Information"
                    description="Information required for applicable HR and statutory processing."
                >
                    <div className="hr-grid">
                        <Input
                            label="Bank Account Holder Name"
                            name="bankAccountHolderName"
                            value={form.bankAccountHolderName}
                            onChange={handleChange}
                        />

                        <Input
                            label="Bank Name"
                            name="bankName"
                            value={form.bankName}
                            onChange={handleChange}
                        />

                        <Input
                            label="Account Number"
                            name="accountNumber"
                            value={form.accountNumber}
                            onChange={handleChange}
                        />

                        <Input
                            label="IFSC"
                            name="ifsc"
                            value={form.ifsc}
                            onChange={handleChange}
                        />

                        <Input
                            label="PAN"
                            name="pan"
                            value={form.pan}
                            onChange={handleChange}
                        />

                        <Input
                            label="UAN / PF Details (if applicable)"
                            name="uanPfDetails"
                            value={form.uanPfDetails}
                            onChange={handleChange}
                        />

                        <Input
                            label="ESIC Details (if applicable)"
                            name="esicDetails"
                            value={form.esicDetails}
                            onChange={handleChange}
                        />
                    </div>
                </FormSection>

                <FormSection
                    number="05"
                    title="Documents"
                    description="Upload the required onboarding documents."
                >
                    <div className="hr-documents">
                        {documentFields.map(([name, label, required]) => (
                            <div className="hr-file" key={name}>
                                <div className="hr-file-header">
                                    <strong>
                                        {label} {required && <span className="hr-required-asterisk">*</span>}
                                    </strong>
                                </div>

                                <input
                                    key={files[name]?.length || 0}
                                    type="file"
                                    multiple={name === "otherDocuments"}
                                    onChange={(e) => handleFileChange(e, name)}
                                    required={required && (!files[name] || files[name].length === 0)}
                                    className="hr-file-input"
                                />

                                {files[name] && files[name].length > 0 && (
                                    <div className="hr-uploaded-files">
                                        {files[name].map((file, idx) => (
                                            <div key={idx} className="hr-uploaded-file-item">
                                                <span className="hr-file-name" title={file.name}>
                                                    {file.name}
                                                </span>
                                                <div className="hr-file-actions">
                                                    <button
                                                        type="button"
                                                        className="hr-file-btn view"
                                                        onClick={() => handleViewFile(file)}
                                                    >
                                                        View
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="hr-file-btn delete"
                                                        onClick={() => handleRemoveFile(name, idx)}
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </FormSection>

                <FormSection
                    number="06"
                    title="Declarations & Consent"
                    description="Please read and acknowledge each declaration before submitting."
                >
                    <div className="hr-consents">
                        <Checkbox
                            name="declarationAccuracy"
                            checked={form.declarationAccuracy}
                            onChange={handleChange}
                            label="I declare that the information provided in this form is accurate and complete."
                        />

                        <Checkbox
                            name="hrProcessingConsent"
                            checked={form.hrProcessingConsent}
                            onChange={handleChange}
                            label="I acknowledge and consent to the processing of my personal information for HR and onboarding purposes."
                        />

                        <Checkbox
                            name="documentAuthenticity"
                            checked={form.documentAuthenticity}
                            onChange={handleChange}
                            label="I declare that the documents submitted by me are authentic and belong to me."
                        />

                        <Checkbox
                            name="policyAcknowledgement"
                            checked={form.policyAcknowledgement}
                            onChange={handleChange}
                            label="I acknowledge the applicable CyberAries company policies."
                        />

                        <Checkbox
                            name="confirmation"
                            checked={form.confirmation}
                            onChange={handleChange}
                            label="I confirm that I have reviewed the information provided and wish to submit this form."
                        />
                    </div>
                </FormSection>

                {error && <div className="hr-error">{error}</div>}

                <div className="hr-submit">
                    <button type="submit" disabled={submitting}>
                        {submitting ? "Submitting..." : "Submit Information"}
                    </button>

                    <p>
                        Your information will be handled through the company's HR
                        onboarding system.
                    </p>
                </div>
            </form>

            {previewFile && (
                <div className="hr-preview-modal-overlay" onClick={handleClosePreview}>
                    <div className="hr-preview-modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="hr-preview-modal-header">
                            <span className="hr-preview-modal-title">{previewFile.name}</span>
                            <button className="hr-preview-modal-close" onClick={handleClosePreview}>
                                &times;
                            </button>
                        </div>
                        <div className="hr-preview-modal-body">
                            {previewFile.type === "image" && (
                                <img src={previewFile.url} alt={previewFile.name} className="hr-preview-image" />
                            )}
                            {previewFile.type === "pdf" && (
                                <iframe src={previewFile.url} title="PDF Preview" className="hr-preview-pdf" />
                            )}
                            {previewFile.type === "other" && (
                                <div className="hr-preview-fallback">
                                    <p>Preview not available for this file type.</p>
                                    <a href={previewFile.url} download={previewFile.name} className="hr-preview-download-btn">
                                        Download File
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

function FormSection({ number, title, description, children }) {
    return (
        <section className="hr-section">
            <div className="hr-section-heading">
                <span>{number}</span>

                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>

            {children}
        </section>
    );
}

function Input({ label, required, ...props }) {
    return (
        <label className="hr-field">
            <span>
                {label} {required && <span className="hr-required-asterisk">*</span>}
            </span>
            <input required={required} {...props} />
        </label>
    );
}

function Textarea({ label, required, ...props }) {
    return (
        <label className="hr-field">
            <span>
                {label} {required && <span className="hr-required-asterisk">*</span>}
            </span>
            <textarea rows="4" required={required} {...props} />
        </label>
    );
}

function Select({ label, options, required, ...props }) {
    return (
        <label className="hr-field">
            <span>
                {label} {required && <span className="hr-required-asterisk">*</span>}
            </span>

            <select required={required} {...props}>
                <option value="">Select</option>

                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </label>
    );
}

function Checkbox({ name, checked, onChange, label }) {
    return (
        <label className="hr-checkbox">
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onChange}
                required
            />

            <span>{label}</span>
        </label>
    );
}

export default HROnboarding;