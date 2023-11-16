<?php 
/*
Template Name: Offer
*/
get_header(); ?>
<section class="hero offer">
    <div class="wrapper">
        <h1>Organisons vos processus pour vous faire gagner du temps.</h1>
        <p><i>Nos coach certifiés Lean Six Sigma vous accompagnent sur la route du succès.</i></p>
    </div>
</section>
</div>
<!-- FIN WRAPPER HEADER + HERO -->
<section class="quick-win">
    <div class="wrapper">
        <span>
            <h2>L’OFFRE <span class="text-fancy-bg-gradient">“QUICK-WIN”</span> !</h2>
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/rocket.png" alt="" class="hourglass">
        </span>
        <div>
            <p>Vous vous sentez limités dans l’augmentation de votre chiffre d’affaire?</p>
            <p>Vous aimeriez une meilleure maitrise de votre cycle de vente?</p>
        </div>
        <ul>
            <li data-icon="📉"><b>Minimisez</b> vos risques d’erreurs opérationnelles</li>
            <li data-icon="💎"><b>Maximisez</b> votre ROI en éliminant vos pertes</li>
            <li data-icon="🚀"><b>Boostez</b> votre équipe avec des processus efficaces</li>
        </ul>
        <p class="balanced">Une stratégie clé en main et un accompagnement de 8 semaines d'accompagnement pour booster
            vos ventes.</p>
        <p>En plus, nous vous familarisons à l’IA Chat GPT pour changer vos réflexes et économiser un max de temps.
        </p>
    </div>
</section>
<section class="explain">
    <div class="wrapper">
        <h2 class="tiny-title">Notre <span class="text-fancy-bg-gradient">valeur ajoutée</span></h2>
        <p><b>Résultats Éclairs</b></p>
        <p>Des améliorations dès les premières semaines, avec un ROI dans l'année.</p>
        <p><b>Prise en main complète</b></p>
        <p>Nous organisons tout pour vous, depuis l’animation des
            workshops jusqu’au coaching de vos équipes.</p>
        <p><b>Approche Novatrice</b></p>
        <p>Bénéficiez de la puissance de “Lean Six Sigma”, la méthodologie utilisée par les grandes boites pour booster
            votre performance d’équipe.</p>
        <p><b>Brillez face à vos concurrents</b></p>
        <p>Devenez scandaleusement efficaces en offrant un service client exemplaire.</p>
        <h3>N’attendez plus pour recevoir du feedback positif de vos clients et de vos équipes.</h3>
    </div>
</section>
<section class="offer__cta">
    <div class="wrapper">
        <div class="offer__cta__desc">
            <div class="balanced">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/prize.png" alt="">
                <p class="undertitle --sm"><i>La Formule</i></p>
                <h2>Quick Win</h2>
            </div>
            <div>
                <h3>Au programme :</h3>
                <p class="undertitle balanced --m">plusieurs sessions workshop à étaler sur 1 mois</p>
                <ul>
                    <li>1er workshop (4h) <ul>
                            <li>Cartographie de votre processus client:</br></br>Marketing → Vente → Opérations</li>
                        </ul>
                    </li>
                    <li>2e workshop (4h) <ul>
                            <li>Identification des opportunités d’amélioration</li>
                        </ul>
                    </li>
                    <li>3e workshop (3h) <ul>
                            <li>Stratégie d'amélioration éclair.</li>
                        </ul>
                    </li>
                    <li><span>Formation IA avec Chat GPT4</span> pour vous donner de nouveaux réflexes de productivité.
                    </li>
                </ul>
                <p class="undertitle balanced --m">Résultats garantis via 8 semaines de suivi (30 min/semaine)</p>

            </div>
        </div>
        <div class="offer__cta__bonus">
            <h3>En bonus:</h3>
            <ul>
                <li>La <b>Toolbox du Lean Management</b> pour créér un mindset d’amélioration continue.</li>
                <li>La méthode de suivi client et de gestion d’équipe qui va accélérer vos ventes et faciliter votre
                    suivi
                    administratif.</li>
                <li>Des template pour supporter l’évolution de votre entreprise et celle de vos employés (procédures,
                    processus, plan de formation + outil Better Process Flow…).</li>
            </ul>
        </div>
        <h3>Contactez-nous dès aujourd'hui pour faire décoller vos ventes.</h3>
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/arrow_down_white.png" alt="Logo BPFlow"
            style="display:block;margin:0 auto; padding-bottom:3rem;">
    </div>
</section>
<section class="contact">
    <div class="wrapper">
        <?php echo do_shortcode('[contact-form-7 id="84572f7" title="Contact form 1"]'); ?>
    </div>
</section>

<?php get_footer(); ?>