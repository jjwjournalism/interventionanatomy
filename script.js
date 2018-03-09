$(document).ready(function(){

	var onHotspotClickPreintervention = function(){
		$("#preinterventionSlide").addClass("show-slide");
		$("#preinterventionX").addClass("show-button");
		$("#preintervention1").addClass("hide-button");
		$("#preintervention2").addClass("hide-button");

	}

	var onHotspotClickIntervention = function(){
		$("#interventionSlide").addClass("show-slide");
		$("#interventionX").addClass("show-button");
		$("#intervention1").addClass("hide-button");
		$("#intervention2").addClass("hide-button");
	}


	$("#preintervention1").click(function(){
		onHotspotClickPreintervention();
		$("#preintervention-pop-in").text("On the show, interventions are organized and facilitated by a rotating cast of professional interventionists. In real life, interventions might be organized by an interventionist, a drug counselor, a doctor, or just the person's family and friends.");
	})

	$("#preintervention2").click(function(){
		onHotspotClickPreintervention();
		$("#preintervention-pop-in").text("On the show, we see about five minutes of the pre-intervention. In interviews, Ken Seeley, the interventionist pictured here, has said that he spends 4-8 hours with the family prior to the intervention. Ron Espudo says that, in his professional work, he can spend up to 2 weeks with an addict's family before the intervention.");

	})	

	$("#preinterventionX").click(function(){
		$("#preinterventionSlide").removeClass("show-slide");
		$("#preintervention1").removeClass("hide-button");
		$("#preintervention2").removeClass("hide-button");
	})

	$("#intervention1").click(function(){
		onHotspotClickIntervention();
		$("#intervention-pop-in").text("On the show, the addict's loved ones compose emotional letters expressing their love for the addict and explaining how the addict's behavior has negatively affected them. In real life, interventionist Rod Espudo only uses letters when the situation calls for it.");

	})

	$("#intervention2").click(function(){
		onHotspotClickIntervention();
		$("#intervention-pop-in").text("One of the most heartbreaking parts of the show is when the addict's loved ones give the addict their 'bottom lines'; that is, when they tell the addict that they'll cut off contact if the addict doesn't get into treatment. Espudo says that he stays away from bottom lines in his real-life interventions, opting instead for what he calls 'leverage.' 'I'm not going to brainwash your parents to not love you,' he said. 'I'm going to teach your parents how not to participate in your addiction.'");

	})	

	$("#interventionX").click(function(){
		$("#interventionSlide").removeClass("show-slide");
		$("#intervention1").removeClass("hide-button");
		$("#intervention2").removeClass("hide-button");
	})
	

});