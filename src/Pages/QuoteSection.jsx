import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const QuoteSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      <div className="flex items-start gap-4">
        <FaQuoteLeft className="text-blue-600 text-7xl" />
        <p className="text-gray-700 text-sm leading-relaxed">
          Semper faucibus suscipit ultricies eleifend semper et tellus gravida
          pretium. Cras cursus ut semper eleifend tortor lectus tristique
          turpis. Laoreet amet ultrices est lectus accumsan nibh cursus nunc.
          Faucibus orci, neque, pretium, massa volutpat convallis nisi
          pellentesque. Gravida in ultricies vitae tortor. Dignissim viverra
          volutpat neque gravida aliquet urna faucibus viverra vulputate.
        </p>
      </div>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4WjtQjPQGIs?si=gvDrZmSNU8NXHMus"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default QuoteSection;
