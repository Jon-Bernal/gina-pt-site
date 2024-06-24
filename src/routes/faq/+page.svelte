<script lang="ts">
	import { Accordion, Container, Title } from '@svelteuidev/core';
</script>

<Container>
	<Title style="margin: 0 auto; box-sizing:border-box; padding: 20px;">FAQ</Title>
</Container>

<Accordion
	radius="md"
	chevronPosition="left"
	variant="contained"
	style="width:80%; margin: 0 auto;"
>
	<Accordion.Item value="WhatIDo">
		<div slot="control" style="font-size: 1.25rem;">What Does a Physical Therapist Do?</div>
		<p>
			I provide therapy in orthopedics rehab, whether you are recovering from an injury or are
			wanting to gain the ability to do more physical activity. This includes exercise that focuses
			both on individual muscles as well as muscle chains and groups. I work to build the body up
			from the basics to ensure there is no oversight of underlying causes of pain and injury. This
			then allows the body the best opportunity to achieve its full potential.
		</p>
		<p>
			I work with the healing process of inflammation. This includes inflammation management through
			ice/heat, TENS unit usage, and manual therapy. I maximize the opportunities available during
			the healing cycles with the various techniques listed here.
		</p>
		<p>
			I also provide Fascial Counterstrain, a hands-on treatment that aids the body in recovery by
			releasing inflammation and releasing tension of connective tissues throughout.
		</p>
	</Accordion.Item>

	<Accordion.Item value="Counterstrain">
		<div slot="control" style="font-size: 1.25rem;">What is Fascial Counterstrain?</div>
		<p>
			Fascial Counterstrain (FCS) is the application of hands-on manual therapy to release
			contractions of your tissues, such as muscles, ligaments, and nerves. When there is tissue
			tension, this can cause pain and dysfunction. By releasing these tissues, the body can move
			more appropriately and release inflammation. This is a painless technique and has the ability
			to affect any system in the body, including lymphatics, visceral organs, bone, and more. Learn
			more about FCS <a href="https://counterstrain.com/">here</a>.
		</p>
	</Accordion.Item>

	<Accordion.Item value="Insurance">
		<div slot="control" style="font-size: 1.25rem;">Do you take insurance or Medicare?</div>
		<p>
			At this time, I do not accept insurance or Medicare. I am however happy to provide a superbill
			so that you may request reimbursement from your insurance provider. Medicare rules state that
			those who are medicare beneficiaries cannot pay “out of pocket” for physical therapy. However,
			there are circumstances that allow a person with Medicare to pay privately. Please email for
			more details.
		</p>
	</Accordion.Item>

	<!-- <Accordion.Item value="typescript">
		<div slot="control">Typescript Based</div>
		Build type safe applications...
	</Accordion.Item> -->

	<Accordion.Item value="payment">
		<div slot="control" style="font-size: 1.25rem;">What are my options for payment?</div>
		<p>
			Payment is due at the time of service for all appointments, and I can provide a superbill upon
			request. For those with a Health Savings Account (HSA) or a Flexible Spending Account (FSA)
			you may also use this as a form of payment if physical therapy is determined to be necessary
			by your doctor.
		</p>
	</Accordion.Item>

	<Accordion.Item value="privatePay">
		<div slot="control" style="font-size: 1.25rem;">
			Why choose to pay privately for physical therapy?
		</div>
		<p>
			I have chosen to provide physical therapy out of network in order to stay aligned with my
			values and ethics for patient care. This allows me to address a person’s needs as they arise
			rather than being isolated to one part of the body at a time. Paying privately also allows me
			to treat for longer periods of time per session and allows me to treat a person for as many
			sessions as they need to heal. Treating someone for longer sessions provides more time to
			address all aspects of care, and reduces the number of appointments needed to achieve the
			patient’s goals.
		</p>
	</Accordion.Item>

	<Accordion.Item value="rates">
		<div slot="control" style="font-size: 1.25rem;">What are your rates?</div>
		<p>All of my sessions, both evaluations and treatments, are 90 minutes for $225.</p>
	</Accordion.Item>

	<Accordion.Item value="referral">
		<div slot="control" style="font-size: 1.25rem;">Do I need a referral for physical therapy?</div>
		<p>
			You do not need a referral to see a physical therapist in the state of Washington as we are a
			“direct access” state. If you plan to submit for reimbursement to your insurance company, you
			may be required to have a referral to receive reimbursement. You may also have a limited
			number of visits for physical therapy per year. Be sure to check with your insurance provider
			on what your benefits cover.
		</p>
	</Accordion.Item>

	<Accordion.Item value="approach">
		<div slot="control" style="font-size: 1.25rem;">What is your approach to patient care?</div>
		<p>
			My approach is to appreiciate all aspects of healthcare. While I am only licensed to provide
			physical therapy, I will recommend other types of therapy and practitioners of these therapies
			as the need arises. I believe in being honest and open about what I am seeing, and from there
			providing options for my patients to explore to further help them along their health journey.
			I recognize that many people have had unpleasant experiences in the healthcare system, and
			have suffered trauma from this. I promise to ensure my patients feel safe, heard, and
			understood (regardless of ethnicity, gender identity, sexuality, ability, or other interdival
			identities) when working with me.
		</p>
	</Accordion.Item>

	<Accordion.Item value="fit">
		<div slot="control" style="font-size: 1.25rem;">Are we a good fit to work together?</div>
		<p>
			I look at physical therapy as a team effort. I will do everything in my power to help someone
			heal, but I cannot do it alone. If the patient is unable to fully participate (within reason),
			I will not be able to continue working with them as we will struggle to see results. If you
			want to dive deep into your health and are willing to be responsible for your health, we can
			achieve great results.
		</p>
	</Accordion.Item>
</Accordion>
