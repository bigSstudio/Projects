// jQuery(document).ready(function() {
   
//     $('.contact-form form input[type="text"], .contact-form form textarea').on('focus', function() {
//         $('.contact-form form input[type="text"], .contact-form form textarea').removeClass('input-error');
//     });
//     $('.contact-form form').submit(function(e) {
//         e.preventDefault();
//         $('.contact-form form input[type="text"], .contact-form form textarea').removeClass('input-error');
//         var postdata = $('.contact-form form').serialize();
//         $.ajax({
//             type: 'POST',
//             url: 'contact.php',
//             data: postdata,
//             dataType: 'json',
//             success: function(json) {
//                 if(json.emailMessage != '') {
//                     $('.contact-form form .contact-email').addClass('input-error');
//                 }
//                 if(json.nameMessage != '') {
//                     $('.contact-form form .contact-name').addClass('input-error');
//                 }
//                 if(json.messageMessage != '') {
//                     $('.contact-form form textarea').addClass('input-error');
//                 }
//                 if(json.emailMessage == '' && json.nameMessage == '' && json.messageMessage == '') {
//                     $('.contact-form form').fadeOut('fast', function() {
//                         $('.contact-form').append('<p>Thanks for contacting me! I will get back to you very soon.</p>');
//                     });
//                 }
//             }
//         });
//     });
     
// });
!function(n){function t(t,a,i){t.addClass(a+" animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){n(this).removeClass(a+" animated"),i()})}function a(n,i){var e=i.autoplay,o=i.repeat,s=i.interval,l=i.outClass,d=i.inClass,u=i.slogans,r=~~n.attr("data-claim-id"),c=r>=u.length,f=c?u[0]:u[r];n.attr("data-claim-id",c?1==o?1:r:r+1),c&&1!=o||t(n,l,function(){n.find("span").text(f),t(n,d,function(){e===!0&&setTimeout(function(){a(n,i)},s)})})}n.fn.sloganRoulette=function(t){return n(this).each(function(){var i=this;t=t||{};var e=n.extend({autoplay:!0,repeat:!0,startDelay:700,interval:1e3,outClass:"fadeOutDown",inClass:"fadeInDown",slogans:["one","two","three"]},t);n(i).css("display","inline-block"),e.startDelay>0?setTimeout(function(){a(n(i),e)},e.startDelay):a(n(i),e)}),this}}(void 0!=window.Zepto?Zepto:jQuery);