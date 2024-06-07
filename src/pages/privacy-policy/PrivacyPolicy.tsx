import { Container, Layout } from '@/components/common'
import { Separator } from '@/components/ui/separator'
import { Typography } from '@/components/ui/typography'
import PrivacyHeader from '@/pages/privacy-policy/components/PrivacyHeader'
import { motion, useScroll } from 'framer-motion'
import { FC } from 'react'
type PrivacyPolicyProps = {}

const PrivacyPolicy: FC<PrivacyPolicyProps> = () => {
  const { scrollYProgress } = useScroll()

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed inset-0 h-3 origin-[0%] bg-primary"
      />
      <Layout>
        <Container className="mx-auto mt-4 max-w-[700px]">
          <PrivacyHeader />

          <div className="mt-4 mt-8 flex flex-col gap-4">
            <div>
              <Typography variant="h3">1. Introduction</Typography>
              <p className="flex flex-col gap-2">
                1.1 The House Hunter project (hereinafter referred to as "we,"
                "us," or "our") is committed to protecting the privacy and
                ensuring the security of personal data belonging to individuals
                (hereinafter referred to as "you" or "user") who interact with
                our platform. This Privacy Policy (hereinafter referred to as
                the "Policy") outlines the manner in which we collect, use,
                store, and protect your personal information in compliance with
                the General Data Protection Regulation (GDPR) (EU) 2016/679.
              </p>
            </div>

            <div>
              <Typography variant="h3">2. Data Collection</Typography>
              <div>
                <ul className="list-decimal space-y-1 pl-6">
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Name and surname</li>
                  <li>
                    Identification documents, such as passport, driving license,
                    ID card, or residence permit
                  </li>
                  <li>
                    Property-related documents and information, including
                    images, address information, and property features
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <Typography variant="h3">
                3. Purpose of Data Collection
              </Typography>
              <div>
                <p>
                  The personal data collected by us is used for the following
                  purposes:
                </p>
                <ul className="mt-2 list-decimal space-y-1 pl-6">
                  <li>
                    Validating property ownership to ensure the legitimacy of
                    listings on our platform
                  </li>
                  <li>
                    Facilitating account verification to prevent fraudulent
                    activities
                  </li>
                  <li>Providing and improving our services to users</li>
                </ul>
              </div>
            </div>

            <div>
              <Typography variant="h3">4. Data Storage and Security</Typography>
              <div>
                <p>
                  4.1 We employ robust security measures to protect your
                  personal information from unauthorized access, alteration,
                  disclosure, or destruction. These measures include, but are
                  not limited to, secure storage solutions, encryption, and
                  strict access controls.
                </p>
                <p>
                  4.2 Access to your personal data is restricted to authorized
                  personnel who require such access to perform their duties and
                  provide services to you.
                </p>
              </div>
            </div>

            <div>
              <Typography variant="h3">5. Data Retention</Typography>
              <div>
                <p>
                  5.1 We retain user data for a period of 365 days from the date
                  of collection or last interaction with our platform.
                </p>
                <p>
                  5.2 Users will be notified via email 7 days prior to the
                  expiration of the data retention period regarding our
                  intention to extend the storage of their data for an
                  additional year.
                </p>
                <p>
                  5.3 If no response is received from the user within the
                  specified timeframe, all data associated with the user will be
                  securely and permanently deleted from our system.
                </p>
              </div>
            </div>

            <div>
              <Typography variant="h3">6. User Rights</Typography>
              <p>
                Under the GDPR, users have the following rights concerning their
                personal data:
              </p>
              <ul className="mt-2 list-decimal space-y-1 pl-6">
                <li>
                  Right to Access: You have the right to request a copy of the
                  personal data we hold about you.
                </li>
                <li>
                  Right to Rectification: You have the right to request the
                  correction of any inaccurate or incomplete personal data we
                  hold about you.
                </li>
                <li>
                  Right to Erasure ("Right to be Forgotten"): You have the right
                  to request the deletion of your personal data. This can be
                  done by visiting the "Profile Settings" page on our platform
                  and clicking the "Delete My Account" button. Please note that
                  upon deletion of your data, you will be required to undergo
                  the verification process again should you wish to use our
                  platform in the future.
                </li>
                <li>
                  Right to Restrict Processing: You have the right to request
                  the restriction of processing your personal data under certain
                  conditions outlined in the GDPR. (e) Right to Data
                  Portability: You have the right to receive your personal data
                  in a structured, commonly used, and machine-readable format.
                </li>
                <li>
                  Right to be Informed: You have the right to be informed about
                  the collection and use of your personal data, including the
                  purposes of processing, retention periods, and any third
                  parties with whom the data may be shared.
                </li>
                <li>
                  Right to Object: You have the right to object to the
                  processing of your personal data under certain conditions
                  specified in the GDPR.
                </li>
              </ul>
            </div>

            <div>
              <Typography variant="h3">7. Data Sharing</Typography>
              <div>
                <p>
                  7.1 We do not share your personal data with third parties,
                  except when necessary to provide our services or as required
                  by applicable laws and regulations.
                </p>
              </div>
            </div>

            <div>
              <Typography variant="h3">8. Contact Details</Typography>
              <div>
                <p>
                  8.1 If you have any questions, concerns, or requests regarding
                  our Privacy Policy or the handling of your personal data,
                  please contact our Data Protection Officer by completing the
                  contact form available on our website under the "Contact Us"
                  tab.
                </p>
              </div>
            </div>

            <div>
              <Typography variant="h3">
                9. Changes to this Privacy Policy
              </Typography>
              <div>
                <p>
                  9.1 We reserve the right to update or modify this Privacy
                  Policy at any time. Any changes will be posted on this page
                  and, where appropriate, notified to you via email.
                </p>
                <p>
                  9.2 It is your responsibility to review this Privacy Policy
                  periodically for any updates or changes.
                </p>
              </div>
            </div>

            <div>
              <Typography variant="h3">10. Combating Scams</Typography>

              <div>
                <p>
                  We are committed to protecting our users from scams and
                  fraudulent activities. To this end, we implement the following
                  measures:
                </p>
                <ul className="mt-2 list-decimal space-y-1 pl-6">
                  <li>
                    Verification of Listings: All property listings undergo a
                    thorough vetting process to ensure their authenticity,
                    including the verification of property ownership and the
                    legitimacy of the listings.
                  </li>
                  <li>
                    User Verification: We require users to provide valid
                    identification documents during the registration process to
                    prevent the creation of fraudulent accounts.
                  </li>
                  <li>
                    Monitoring and Reporting: We continuously monitor our
                    platform for suspicious activities and encourage users to
                    report any fraudulent or suspicious behavior. All reports
                    are promptly investigated, and appropriate actions are
                    taken.
                  </li>
                  <li>
                    Education and Awareness: We provide resources and tips to
                    our users on how to recognize and avoid scams.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <Typography variant="h3">11. Conclusion</Typography>
              <div>
                <p>
                  11.1 By using the House Hunter platform, you acknowledge that
                  you have read, understood, and agree to the terms outlined in
                  this Privacy Policy.
                </p>
                <p>
                  11.2 We are committed to ensuring the protection of your
                  personal data, maintaining secure authentication and
                  authorization processes, and upholding the integrity and
                  confidentiality of our system.
                </p>
                <p>
                  11.3 Regular security reviews and updates are conducted to
                  adapt to emerging threats and vulnerabilities, ensuring the
                  ongoing security of your personal data.
                </p>
              </div>
            </div>

            <div>
              <Typography variant="h3">12. Rights of House Hunter</Typography>
              <div>
                <p>
                  12.1 We reserve the right to take appropriate legal action
                  against users who engage in fraudulent activities, violate our
                  terms of service, or infringe upon the rights of other users
                  or House Hunter.
                </p>
                <p>
                  12.2 We have the right to terminate or suspend user accounts
                  that are found to be in violation of our terms of service or
                  engaged in fraudulent activities, without prior notice.
                </p>
                <p>
                  12.3 We reserve the right to cooperate with law enforcement
                  authorities and provide user information when required by law
                  or in response to a valid legal request, such as a court
                  order, subpoena, or search warrant.
                </p>
                <p>
                  12.4 In the event of a merger, acquisition, or sale of all or
                  a portion of our assets, we reserve the right to transfer user
                  information as part of the transaction, subject to the terms
                  of this Privacy Policy and any applicable laws and
                  regulations.
                </p>
                <p>
                  12.5 We have the right to modify, suspend, or terminate our
                  services, in whole or in part, at any time and without prior
                  notice to users.
                </p>
              </div>
            </div>

            <div>
              <Typography variant="h3">13. Legal Issues</Typography>
              <div>
                <p>
                  13.1 This Privacy Policy shall be governed by and construed in
                  accordance with the laws of the Czech Republic, without regard
                  to its conflict of law provisions.
                </p>
                <p>
                  13.2 Any disputes arising from or relating to this Privacy
                  Policy or the use of the House Hunter platform shall be
                  resolved through amicable negotiations between the parties. If
                  a resolution cannot be reached, the dispute shall be submitted
                  to the exclusive jurisdiction of the courts of the Czech
                  Republic, as we are employed in Prague.
                </p>
                <p>
                  13.3 If any provision of this Privacy Policy is found to be
                  invalid, illegal, or unenforceable by a court of competent
                  jurisdiction, the remaining provisions shall continue in full
                  force and effect.
                </p>
                <p>
                  13.4 Our failure to enforce any right or provision of this
                  Privacy Policy shall not be deemed a waiver of such right or
                  provision.
                </p>
                <p>
                  13.5 This Privacy Policy, together with our Terms of Service,
                  constitutes the entire agreement between you and House Hunter
                  regarding the use of our platform and supersedes any prior
                  agreements or understandings, whether written or oral.
                </p>
              </div>
            </div>

            <Separator className="mt-4 w-full" />
            <Typography variant="h2">Privacy Policy</Typography>
            <div>
              <Typography variant="h4">
                23. Data Protection Impact Assessment
              </Typography>

              <p>
                23.1 We conduct regular Data Protection Impact Assessments
                (DPIAs) to identify and minimize the data protection risks
                associated with our processing activities. These assessments
                help us ensure that we are processing personal data in
                compliance with the GDPR and the applicable laws of the Czech
                Republic.
              </p>
            </div>

            <Typography variant="h4">24. Data Breach Notification</Typography>
            <p>
              24.1 In the event of a data breach that poses a risk to the rights
              and freedoms of individuals, we will notify the affected users and
              the relevant supervisory authority (the Office for Personal Data
              Protection of the Czech Republic) within 72 hours of becoming
              aware of the breach, as required by the GDPR and the applicable
              laws of the Czech Republic.
            </p>
          </div>

          <div>
            <Typography variant="h4">
              25. Data Protection Officer (DPO)
            </Typography>

            <p>
              25.1 We have appointed a Data Protection Officer (DPO) to oversee
              our compliance with the GDPR and the applicable laws of the Czech
              Republic. Our DPO can be contacted using the information provided
              in Section 10 (Contact Details) of this Policy.
            </p>
          </div>

          <div>
            <Typography variant="h4">
              26. Automated Decision-Making and Profiling
            </Typography>

            <p>
              26.1 We do not engage in automated decision-making or profiling
              that produces legal effects concerning you or similarly
              significantly affects you, as defined by the GDPR and the
              applicable laws of the Czech Republic.
            </p>
          </div>
          <div>
            <Typography variant="h4">27. Consent Management</Typography>

            <p>
              27.1 Where we rely on your consent as the legal basis for
              processing your personal data, you have the right to withdraw your
              consent at any time. You can manage your consent preferences by
              contacting us using the information provided in Section 10
              (Contact Details) of this Policy.
            </p>
          </div>
          <div>
            <Typography variant="h4">
              28. Third-Party Data Processors
            </Typography>

            <p>
              28.1 We may engage third-party data processors to assist us in
              providing our services. These processors are bound by contractual
              obligations to process personal data in compliance with the GDPR
              and the applicable laws of the Czech Republic, and to implement
              appropriate technical and organizational measures to ensure the
              security of the data.
            </p>
          </div>
          <div>
            <Typography variant="h4">
              29. Data Retention and Deletion
            </Typography>

            <p>
              29.1 We will retain your personal data only for as long as
              necessary to fulfill the purposes for which it was collected,
              including for the purposes of satisfying any legal, accounting, or
              reporting requirements. After this period, we will securely delete
              or anonymize your personal data, unless otherwise required by
              applicable laws or regulations.
            </p>
          </div>
          <div>
            <Typography variant="h4">
              30. User Verification and Anti-Fraud Measures
            </Typography>

            <p>
              30.1 To prevent fraudulent activities and ensure the security of
              our platform, we may implement user verification measures, such as
              requiring users to provide additional identification documents or
              undergo enhanced authentication processes. 30.2 We reserve the
              right to suspend or terminate accounts that are suspected of
              engaging in fraudulent activities, without prior notice.
            </p>
          </div>
          <div>
            <Typography variant="h4">
              31. Compliance with Czech Consumer Protection Laws
            </Typography>

            <p>
              31.1 In addition to complying with the GDPR and the applicable
              data protection laws of the Czech Republic, we also adhere to the
              relevant consumer protection laws, such as Act No. 634/1992 Coll.,
              on Consumer Protection, and Act No. 89/2012 Coll., the Civil Code,
              as amended.
            </p>
          </div>
          <div>
            <Typography variant="h4">
              32. Dispute Resolution and Arbitration
            </Typography>

            <p>
              32.1 Any dispute arising out of or in connection with this Policy,
              including any question regarding its existence, validity, or
              termination, shall be referred to and finally resolved by
              arbitration under the Rules of the Arbitration Court attached to
              the Czech Chamber of Commerce and the Agricultural Chamber of the
              Czech Republic by one or more arbitrators appointed in accordance
              with the said Rules. The seat of arbitration shall be Prague,
              Czech Republic, and the language of the arbitration shall be
              English.
            </p>
          </div>
          <div>
            <Typography variant="h4">
              33. Compliance with Anti-Money Laundering (AML) and
              Counter-Terrorist Financing (CTF) Regulations
            </Typography>

            <p>
              33.1 To comply with the applicable AML and CTF regulations in the
              Czech Republic, such as Act No. 253/2008 Coll., on Selected
              Measures against Legitimisation of Proceeds of Crime and Financing
              of Terrorism, as amended, we may implement additional user
              verification and monitoring measures, and report suspicious
              activities to the relevant authorities.
            </p>
          </div>
          <div>
            <Typography variant="h4">
              34. Cooperation with Law Enforcement and Regulatory Authorities
            </Typography>

            <p>
              34.1 We will cooperate with law enforcement and regulatory
              authorities in the Czech Republic, such as the Police of the Czech
              Republic and the Czech National Bank, in accordance with the
              applicable laws and regulations. This may include providing access
              to user data upon receipt of a valid legal request, such as a
              court order or subpoena.
            </p>
          </div>
          <div>
            <Typography variant="h4">
              35. Compliance Monitoring and Audit
            </Typography>

            <p>
              35.1 We regularly monitor and audit our data processing activities
              to ensure ongoing compliance with the GDPR, the applicable laws of
              the Czech Republic, and this Policy. We also maintain records of
              our processing activities, as required by the GDPR and the
              applicable laws of the Czech Republic.
            </p>
          </div>
          <div>
            <Typography variant="h4">36. Training and Awareness</Typography>

            <p>
              36.1 We provide regular training and awareness programs to our
              employees and contractors to ensure that they understand and
              comply with the GDPR, the applicable laws of the Czech Republic,
              and this Policy. This includes training on data protection
              principles, data subject rights, and data security measures.
            </p>
          </div>
          <div>
            <Typography variant="h4">37. Continuous Improvement</Typography>

            <p>
              37.1 We are committed to continuously improving our data
              protection practices and will regularly review and update this
              Policy to reflect changes in our processing activities, best
              practices, and the evolving legal and regulatory landscape.
            </p>
          </div>

          <p className="mt-8 font-semibold italic">
            By using the House Hunter platform, you acknowledge that you have
            read, understood, and agree to be bound by this Privacy Policy and
            Terms and Conditions, as well as any additional terms, conditions,
            and policies referenced herein. It is your responsibility to review
            this Policy periodically for any updates or changes. This Privacy
            Policy and Terms and Conditions have been further enhanced to
            address additional requirements under Czech law, including
            provisions related to data protection impact assessments, data
            breach notification, the appointment of a Data Protection Officer,
            automated decision-making and profiling, consent management,
            third-party data processors, data retention and deletion, user
            verification and anti-fraud measures, compliance with Czech consumer
            protection laws, dispute resolution and arbitration, compliance with
            anti-money laundering and counter-terrorist financing regulations,
            cooperation with law enforcement and regulatory authorities,
            compliance monitoring and audit, training and awareness, and
            continuous improvement. These additions ensure that the document is
            comprehensive and fully compliant with the relevant legal and
            regulatory requirements in the Czech Republic.
          </p>

          <div className="mt-4 flex justify-end">
            <p className="font-semibold italic">Last updated: 26/05/2024</p>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default PrivacyPolicy
