<script>
	import gina from '$lib/assets/gina.jpg';
	import jonGina from '$lib/assets/jon_gina.jpg';
	import { AspectRatio, Container, Grid, Image } from '@svelteuidev/core';
</script>

<Container size="md">
	<section class="topImage">
		<Grid justify="space-between">
			<Grid.Col span={12}>
				<h3>Education</h3>
			</Grid.Col>
			<Grid.Col span={9}>
				<p style="margin-top: 0; padding-top: 0;">
					I began my education with a BS in Athletic Training, where I learned first hand the
					importance of maintaining a person’s physical ability and how to manage acute injuries. I
					then earned her Masters in Sports Management to better understand the business side of
					athletics and clinic management. It was during this time that I discovered my love of
					physical therapy through a chance conversation with a PT, and returned to undergrad to
					complete prerequisites to apply to PT school. I finished my education with a Doctorate of
					Physical Therapy in 2018 upon completing clinical rotations in post-surgical rehab,
					inpatient acute care, outpatient orthopedics, and outpatient neurological rehab.
				</p>
			</Grid.Col>
			<Grid.Col span={3}>
				<Image
					src={gina}
					alt="Gina"
					fit="contain"
					radius="md"
					width={200}
					style="margin-left: auto;"
				/>
			</Grid.Col>
		</Grid>
	</section>
	<section>
		<h3>Continuing Education and Career Goals</h3>
		<p>
			After graduation I worked in a trauma level II hospital, floating to all floors with my
			primary units being acute care and post-op. During this time I also worked in the outpatient
			chronic pain and degenerative conditions clinic. Early on I learned of Fascial Counterstrain,
			a manual therapy that has helped fill in the gaps of traditional PT, and I have since
			completed 12 courses of this technique. After two years in a hospital setting, I fully
			transitioned to outpatient orthopedics with my move to Whidbey Island. My continuing education
			goals are to complete the Fascial Counterstain course load and to become certified in this
			technique. I also plan to pursue continuing education in Feldenkrais therapy and HeartMath.
		</p>
	</section>
	<section>
		<h3>Personal Knowledge of Healthcare</h3>
		<p>
			I have a first-hand understanding of orthopedic injuries, chronic conditions, and holistic
			care. During my time as a collegiate athlete in cross country and track, I sustained low back
			and knee injuries that nearly ended my career in running. I have also contended with mast cell
			activation syndrome (MCAS), an autoimmune disorder which causes the body to react aggressively
			to environmental and food irritants. Chronic fatigue, chronic full body edema, eczema, and
			asthma are a few of the symptoms seen with this condition. After trying multiple types of
			medications and being housebound with no positive results, I turned to acupuncture with little
			hope of recovery. After a long assessment, the acupuncturist recommended a course of recovery
			with a multi-system approach. Since implementing this, I have regained my ability to work and
			participate in life fully while still managing this condition. It has been through this
			experience that I have learned the importance of addressing all aspects of health and not just
			the physical side.
		</p>
	</section>
	<section class="sideBySide">
		<div class="left">
			<Image
				src={jonGina}
				alt="Jon and Gina hiking in the enchantments"
				fit="contain"
				radius="md"
				width={300}
				height={225}
				style="margin: 20px;"
			/>
		</div>
		<div class="right">
			<h3>What I Do Outside of Physical Therapy</h3>
			<p>
				For fun I enjoy spending time with my husband and our four rescue rabbits. I frequently go
				hiking, paddle boarding, and rock climbing. When I’m not outside, I can be found reading,
				embroidering, and watching movies. I particularly like Marvel, Star Trek, and comedies of
				all kinds.
			</p>
		</div>
	</section>
</Container>

<style>
	section {
		margin-top: 3rem;
	}
</style>
