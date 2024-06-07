import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Typography } from '@/components/ui/typography'
import { FC, ReactNode } from 'react'

type ConsentPopupProps = {
  trigger?: ReactNode
  onAccept?: () => void
  acceptButton?: boolean
}

const ConsentPopup: FC<ConsentPopupProps> = ({
  trigger,
  onAccept,
  acceptButton = true
}) => {
  return (
    <Dialog>
      {trigger ? (
        trigger
      ) : (
        <DialogTrigger className="text-blue-800 underline">
          Terms and Conditions
        </DialogTrigger>
      )}
      <DialogContent
        className="h-[600px] w-full sm:max-w-[600px]"
        closeIcon={false}
      >
        <ScrollArea>
          <DialogHeader>
            <div className="mt-2 text-left text-sm text-foreground">
              <div className="flex flex-col gap-2 pr-2">
                <div>
                  <Typography variant="h4">14. Terms and Conditions</Typography>
                  <p>
                    14.1 Acceptance of Terms By accessing or using the House
                    Hunter platform, you acknowledge that you have read,
                    understood, and agree to be bound by these Terms and
                    Conditions (hereinafter referred to as the "Terms") and our
                    Privacy Policy.
                  </p>
                  <p>
                    14.2 Use of the Platform a) You must be at least 18 years
                    old to use our platform. By using House Hunter, you
                    represent and warrant that you are of legal age and have the
                    right, authority, and capacity to enter into these Terms. b)
                    You agree to use the House Hunter platform only for lawful
                    purposes and in accordance with these Terms. You shall not
                    use our platform in any way that violates any applicable
                    federal, state, local, or international law or regulation.
                  </p>
                  <p>
                    14.3 User Accounts a) To access certain features of our
                    platform, you may be required to create an account. You
                    agree to provide accurate, current, and complete information
                    during the registration process and to update such
                    information as necessary to maintain its accuracy. b) You
                    are responsible for maintaining the confidentiality of your
                    account and password, and you agree to accept responsibility
                    for all activities that occur under your account.
                  </p>
                  <p>
                    14.4 Intellectual Property a) The House Hunter platform and
                    its original content, features, and functionality are owned
                    by House Hunter and are protected by international
                    copyright, trademark, patent, trade secret, and other
                    intellectual property or proprietary rights laws. b) You
                    agree not to reproduce, distribute, modify, create
                    derivative works of, publicly display, publicly perform,
                    republish, download, store, or transmit any of the material
                    on our platform, except as expressly permitted by these
                    Terms.
                  </p>
                  <p>
                    14.5 User Content a) By submitting, posting, or displaying
                    content on or through the House Hunter platform, you grant
                    us a worldwide, non-exclusive, royalty-free license to use,
                    reproduce, adapt, publish, translate, distribute, and
                    display such content for the purpose of providing and
                    promoting our services. b) You represent and warrant that
                    you own or control all rights to the content you submit,
                    post, or display on or through our platform, and that such
                    content does not violate the rights of any third party.
                  </p>
                  <p>
                    14.6 Termination a) We may terminate or suspend your access
                    to the House Hunter platform immediately, without prior
                    notice or liability, for any reason whatsoever, including,
                    without limitation, if you breach these Terms. b) Upon
                    termination, your right to use the platform will immediately
                    cease, and we may delete or remove your account and any
                    content you have submitted.
                  </p>
                  <p>
                    14.7 Limitation of Liability In no event shall House Hunter,
                    its directors, employees, partners, agents, suppliers, or
                    affiliates be liable for any indirect, incidental, special,
                    consequential, or punitive damages, including, without
                    limitation, loss of profits, data, use, goodwill, or other
                    intangible losses, resulting from your access to or use of
                    the House Hunter platform.
                  </p>
                  <p>
                    14.8 Indemnification You agree to defend, indemnify, and
                    hold harmless House Hunter, its directors, employees,
                    partners, agents, suppliers, and affiliates from and against
                    any claims, liabilities, damages, judgments, awards, losses,
                    costs, expenses, or fees (including reasonable attorneys'
                    fees) arising out of or relating to your violation of these
                    Terms or your use of the House Hunter platform.
                  </p>
                  <p>
                    14.9 Governing Law and Jurisdiction These Terms shall be
                    governed by and construed in accordance with the laws of the
                    Czech Republic, without regard to its conflict of law
                    provisions. Any legal action or proceeding arising out of or
                    relating to these Terms shall be brought exclusively in the
                    courts of the Czech Republic.
                  </p>
                  <p>
                    14.10 Severability If any provision of these Terms is held
                    to be invalid, illegal, or unenforceable, such provision
                    shall be modified to the minimum extent necessary to make it
                    valid, legal, and enforceable. If such modification is not
                    possible, the relevant provision shall be deemed deleted.
                    Any modification to or deletion of a provision shall not
                    affect the validity and enforceability of the rest of these
                    Terms.
                  </p>
                  <p>
                    14.11 Entire Agreement These Terms, together with our
                    Privacy Policy, constitute the entire agreement between you
                    and House Hunter regarding the use of our platform and
                    supersede any prior agreements or understandings, whether
                    written or oral.
                  </p>
                  <p>
                    14.12 User Conduct a) You agree to use the House Hunter
                    platform in a manner that is consistent with these Terms and
                    all applicable laws and regulations. You shall not engage in
                    any activity that interferes with or disrupts the
                    functioning of the platform or the servers and networks
                    connected to it. b) You shall not attempt to gain
                    unauthorized access to any portion of the House Hunter
                    platform, other users' accounts, or any other systems or
                    networks connected to the platform. c) You agree not to use
                    the House Hunter platform to upload, post, email, transmit,
                    or otherwise make available any content that is unlawful,
                    harmful, threatening, abusive, harassing, defamatory,
                    vulgar, obscene, or otherwise objectionable.
                  </p>
                  <p>
                    14.13 Feedback and Suggestions If you provide House Hunter
                    with any feedback, suggestions, or ideas regarding the
                    platform or our services, you grant us a worldwide,
                    perpetual, irrevocable, royalty-free license to use and
                    incorporate such feedback, suggestions, or ideas for any
                    purpose, without any obligation to compensate you.
                  </p>
                  <p>
                    14.14 Third-Party Links and Services The House Hunter
                    platform may contain links to third-party websites or
                    services that are not owned or controlled by House Hunter.
                    We have no control over, and assume no responsibility for,
                    the content, privacy policies, or practices of any
                    third-party websites or services.
                  </p>
                  <p>
                    14.15 Modification of Terms We reserve the right to modify
                    these Terms at any time, without prior notice. Any changes
                    to these Terms will be posted on this page, and the revised
                    version will be effective immediately upon posting. It is
                    your responsibility to review these Terms periodically for
                    any updates or changes.
                  </p>
                  <p>
                    14.16 No Waiver Our failure to enforce any right or
                    provision of these Terms shall not be considered a waiver of
                    such right or provision. The waiver of any such right or
                    provision will be effective only if in writing and signed by
                    a duly authorized representative of House Hunter.
                  </p>
                  <p>
                    14.17 Assignment You may not assign or transfer these Terms,
                    by operation of law or otherwise, without our prior written
                    consent. Any attempt by you to assign or transfer these
                    Terms without such consent will be null and void. We may
                    freely assign or transfer these Terms without restriction.
                  </p>
                  <p>
                    14.18 Force Majeure House Hunter shall not be liable for any
                    failure to perform its obligations under these Terms if such
                    failure is caused by circumstances beyond its reasonable
                    control, including, but not limited to, acts of God, natural
                    disasters, war, terrorism, riots, embargoes, acts of civil
                    or military authorities, fire, floods, accidents, strikes,
                    or shortages of transportation facilities, fuel, energy,
                    labor, or materials.
                  </p>
                  <p>
                    14.19 Survival Any provisions of these Terms that by their
                    nature should survive termination shall survive termination,
                    including, without limitation, ownership provisions,
                    warranty disclaimers, indemnity, and limitations of
                    liability.
                  </p>
                  <p>
                    14.20 Contact Information If you have any questions about
                    these Terms, please contact us using the information
                    provided on the "Contact Us" page of the House Hunter
                    platform.
                  </p>
                </div>

                <div>
                  <Typography variant="h4">15. Final Provisions</Typography>
                  <p>
                    15.1 Headings The headings used in these Terms are included
                    for convenience only and will not limit or otherwise affect
                    these Terms.
                  </p>
                  <p>
                    15.2 Notices Any notices or other communications provided by
                    House Hunter under these Terms will be given by posting to
                    the House Hunter platform or via email to the address
                    associated with your account.
                  </p>
                  <p>
                    15.3 No Third-Party Beneficiaries These Terms do not and are
                    not intended to confer any rights or remedies upon any
                    person other than you and House Hunter.
                  </p>
                  <p>
                    15.4 Relationship of the Parties Nothing in these Terms is
                    intended to or shall operate to create a partnership between
                    you and House Hunter, or authorize either party to act as an
                    agent for the other.
                  </p>
                  <p>
                    15.5 Translations These Terms may be translated into other
                    languages for convenience. In the event of any inconsistency
                    or discrepancy between the English version and any
                    translated version of these Terms, the English version shall
                    prevail.
                  </p>
                  <p>
                    15.6 Dispute Resolution Any dispute arising out of or in
                    connection with these Terms, including any question
                    regarding its existence, validity, or termination, shall be
                    referred to and finally resolved by arbitration under the
                    Rules of Arbitration of the International Chamber of
                    Commerce (ICC) by one or more arbitrators appointed in
                    accordance with the said Rules. The seat of arbitration
                    shall be Prague, Czech Republic, and the language of the
                    arbitration shall be English.
                  </p>
                  <p>
                    15.7 Waiver of Jury Trial You and House Hunter hereby waive
                    any right to a jury trial in connection with any action or
                    litigation in any way arising out of or related to these
                    Terms.
                  </p>
                  <p>
                    15.8 Statute of Limitations You agree that regardless of any
                    statute or law to the contrary, any claim or cause of action
                    arising out of or related to the use of the House Hunter
                    platform or these Terms must be filed within one (1) year
                    after such claim or cause of action arose, or be forever
                    barred.
                  </p>
                  <p>
                    15.9 Entire Agreement These Terms, together with the Privacy
                    Policy and any other legal notices or additional terms and
                    conditions published by House Hunter on the platform, shall
                    constitute the entire agreement between you and House Hunter
                    concerning the House Hunter platform and supersede all prior
                    terms, agreements, discussions, and writings regarding the
                    subject matter hereof.
                  </p>
                  <p>
                    15.10 Contact Us If you have any questions, concerns, or
                    suggestions regarding these Terms, please contact us using
                    the information provided on the "Contact Us" page of the
                    House Hunter platform. By using the House Hunter platform,
                    you acknowledge that you have read, understood, and agree to
                    be bound by these Terms and Conditions, as well as our
                    Privacy Policy. It is your responsibility to review these
                    Terms periodically for any updates or changes. platform.
                  </p>
                </div>
                <div>
                  <Typography variant="h4">16. Termination</Typography>
                  <p>
                    16.1 We may terminate or suspend your access to the House
                    Hunter platform immediately, without prior notice or
                    liability, for any reason whatsoever, including, without
                    limitation, if you breach this Policy or our Terms and
                    Conditions.
                  </p>
                  <p>
                    16.2 Upon termination, your right to use the platform will
                    immediately cease, and we may delete or remove your account
                    and any content you have submitted.
                  </p>
                </div>

                <div>
                  <Typography variant="h4">
                    17. Governing Law and Jurisdiction
                  </Typography>
                  <p>
                    17.1 This Policy and any disputes arising out of or in
                    connection with it shall be governed by and construed in
                    accordance with the laws of the Czech Republic, without
                    regard to its conflict of law provisions.
                  </p>
                  <p>
                    17.2 Any legal action or proceeding arising out of or
                    relating to this Policy shall be brought exclusively in the
                    courts of the Czech Republic, and you consent to the
                    personal jurisdiction of such courts.
                  </p>
                </div>
                <div>
                  <Typography variant="h4">18. Severability</Typography>
                  <p>
                    18.1 If any provision of this Policy is held to be invalid,
                    illegal, or unenforceable, such provision shall be modified
                    to the minimum extent necessary to make it valid, legal, and
                    enforceable. If such modification is not possible, the
                    relevant provision shall be deemed deleted. Any modification
                    to or deletion of a provision shall not affect the validity
                    and enforceability of the rest of this Policy.
                  </p>
                </div>

                <Typography variant="h4">19. Entire Agreement</Typography>
                <p>
                  19.1 This Policy, together with our Terms and Conditions,
                  constitutes the entire agreement between you and House Hunter
                  regarding the use of our platform and supersedes any prior
                  agreements or understandings, whether written or oral.
                </p>

                <div>
                  <Typography variant="h4">20. Language</Typography>
                  <p>
                    20.1 In case of any discrepancies between the English
                    version of this Policy and any translated versions, the
                    English version shall prevail.
                  </p>
                </div>

                <div>
                  <Typography variant="h4">21. Miscellaneous</Typography>
                  <p>
                    21.1 Our failure to enforce any right or provision of this
                    Policy shall not be considered a waiver of such right or
                    provision.
                  </p>
                  <p>
                    21.2 You agree that no joint venture, partnership,
                    employment, or agency relationship exists between you and
                    House Hunter as a result of this Policy or your use of the
                    House Hunter platform.
                  </p>
                  <p>
                    21.3 We reserve the right to assign or transfer our rights
                    and obligations under this Policy to any third party at any
                    time without notice to you.
                  </p>
                  <p>
                    21.4 The section titles in this Policy are for convenience
                    only and have no legal or contractual effect.
                  </p>
                </div>

                <div>
                  <Typography variant="h4">
                    22. Reporting Violations and Seeking Assistance
                  </Typography>
                  <p>
                    22.1 If you become aware of any violations of this Policy or
                    need assistance with any issues related to your personal
                    data or the use of our platform, please contact us using the
                    information provided in Section 10 (Contact Details) of this
                    Policy. By using the House Hunter platform, you acknowledge
                    that you have read, understood, and agree to be bound by
                    this Privacy Policy and Terms and Conditions, as well as any
                    additional terms, conditions, and policies referenced
                    herein. It is your responsibility to review this Policy
                    periodically for any updates or changes. Last updated:
                    26/05/2024 This Privacy Policy and Terms and Conditions have
                    been adapted to ensure compliance with the General Data
                    Protection Regulation (GDPR) (EU) 2016/679 and the relevant
                    laws of the Czech Republic, including Act No. 110/2019
                    Coll., on Personal Data Processing. The document has been
                    structured to provide a comprehensive overview of how House
                    Hunter collects, processes, and protects users' personal
                    data, as well as the rights and obligations of both House
                    Hunter and its users. The governing law and jurisdiction
                    clauses have been updated to reflect the dispute resolution
                    process in the Czech Republic, and additional provisions
                    have been included to address specific requirements under
                    Czech law.
                  </p>
                </div>
              </div>
            </div>
          </DialogHeader>
        </ScrollArea>

        <DialogFooter className="">
          <DialogClose asChild>
            <Button type="button" variant="secondary" size="sm">
              Close
            </Button>
          </DialogClose>

          {acceptButton && (
            <DialogClose asChild>
              <Button
                type="button"
                onClick={onAccept}
                variant="default"
                size="sm"
                className="bg-green-500 text-white hover:bg-green-400"
              >
                Accept
              </Button>
            </DialogClose>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ConsentPopup
