"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

import TestimonialImg1 from "../../../../public/images/testi_marcus_1788194200341.jpg";
import TestimonialImg2 from "../../../../public/images/testi_sarah_1788194216686.jpg";
import TestimonialImg3 from "../../../../public/images/testi_dr_farhan_1788194231553.jpg";

export default function Sliders() {
  const [testimonialSliders, settestimonialSliders] = useState([
    {
      id: "slider1",
      image: TestimonialImg1,
      name: "Marcus Sterling",
      designation: "Managing Director, Apex Climate Systems (Toronto, ON)",
      description:
        "Metro Valley Digital took our HVAC company from page 4 to #1 on the Google 3-Pack across the Greater Toronto Area within 90 days. Our inbound phone calls skyrocketed by 340%, and our cost per qualified lead dropped by more than half!",
    },
    {
      id: "slider2",
      image: TestimonialImg2,
      name: "Sarah Lindqvist",
      designation: "Founder & CEO, Lumina Apparel E-Commerce",
      description:
        "Their Meta and TikTok ads management is in a league of its own. In our first quarter working with Metro Valley, they dialed in our creative hooks and scaled our monthly revenue from $40k to $210k while maintaining a consistent 5.8x ROAS.",
    },
    {
      id: "slider3",
      image: TestimonialImg3,
      name: "Dr. Farhan Qureshi",
      designation: "Principal Surgeon, MedCare Polyclinics (Lahore)",
      description:
        "The custom Next.js patient web portal and AI booking chatbot developed by their engineering team in Lahore reduced our front-desk workload by 70%. Combined with their Local SEO rank boost, we have a continuous 3-week waiting list.",
    },
  ]);

  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{ delay: 4000 }}
        modules={[Autoplay, Pagination]}
        className="testimnial-slider"
      >
        {testimonialSliders.map((singleSlider) => (
          <SwiperSlide className="testimonial-item" key={singleSlider.id}>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="testimnial-left">
                  <div className="testimonial-head" style={{ width: "130px", height: "130px", margin: "0 auto 15px", borderRadius: "50%", overflow: "hidden", border: "4px solid #ffffff", boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}>
                    <Image
                      src={singleSlider.image}
                      alt={singleSlider.name}
                      width={130}
                      height={130}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div className="testimonial-bottom">
                    <h6>{singleSlider.name}</h6>
                    <p>{singleSlider.designation}</p>
                  </div>
                  <ul className="testimonial-social">
                    <li>
                      <Link href="#">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa fa-dribbble"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-12">
                <div className="testimonial-right">
                  <p>{singleSlider.description}</p>
                  <div className="stars">
                    <ul>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
