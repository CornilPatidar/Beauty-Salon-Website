import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import styles from "./BookNowForm.module.css";

export default function BookNowForm() {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: ''
  });
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    address: false,
    service: false,
    date: false
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: !formData.name.trim(),
      phone: !formData.phone.trim() || formData.phone.length < 10,
      address: !formData.address.trim(),
      service: !formData.service,
      date: !date
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (validateForm()) {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowSuccess(true);
      // Reset form after success
      setTimeout(() => {
        setFormData({ name: '', phone: '', address: '', service: '' });
        setDate(undefined);
        setErrors({ name: false, phone: false, address: false, service: false, date: false });
        setShowSuccess(false);
      }, 3000);
    }
    
    setIsSubmitting(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2 className={styles.title}>Book Your Appointment</h2>

      {/* Full Name */}
      <div className={styles.field}>
        <Label htmlFor="name" className={styles.label}>Full Name</Label>
        <Input 
          id="name" 
          placeholder="Enter your full name" 
          className={cn(styles.input, errors.name && styles.inputError)}
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />
        {errors.name && <span className={styles.errorText}>Please enter your full name</span>}
      </div>

      {/* Phone Number */}
      <div className={styles.field}>
        <Label htmlFor="phone" className={styles.label}>Phone Number</Label>
        <Input 
          id="phone" 
          placeholder="Enter your phone number" 
          type="tel" 
          className={cn(styles.input, errors.phone && styles.inputError)}
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
        />
        {errors.phone && <span className={styles.errorText}>Please enter a valid phone number (min 10 digits)</span>}
      </div>

      {/* Address */}
      <div className={styles.field}>
        <Label htmlFor="address" className={styles.label}>Address</Label>
        <Input 
          id="address" 
          placeholder="House No, Street, Landmark" 
          className={cn(styles.input, errors.address && styles.inputError)}
          value={formData.address}
          onChange={(e) => handleInputChange('address', e.target.value)}
        />
        <p className={styles.fixedLocation}>Modasa, Gujarat, India</p>
        {errors.address && <span className={styles.errorText}>Please enter your address</span>}
      </div>

      {/* Service */}
      <div className={styles.field}>
        <Label className={styles.label}>Select Service</Label>
        <select 
          className={cn(styles.select, errors.service && styles.inputError)}
          value={formData.service}
          onChange={(e) => handleInputChange('service', e.target.value)}
        >
          <option value="">Select a service</option>
          <option value="haircut">Haircut</option>
          <option value="bridal">Bridal Makeup</option>
          <option value="haircolor">Hair Color</option>
          <option value="spa">Spa Treatment</option>
        </select>
        {errors.service && <span className={styles.errorText}>Please select a service</span>}
      </div>

      {/* Date Picker */}
      <div className={styles.field}>
        <Label className={styles.label}>Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <button
              type="button"
              className={cn(
                styles.dateButton,
                "w-full flex items-center justify-start gap-2 border rounded-md px-4 py-2 text-sm bg-white",
                errors.date && styles.inputError
              )}
            >
              <CalendarIcon className="h-4 w-4" />
              {date ? format(date, "PPP") : "Pick a date"}
            </button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            side="bottom"
            sideOffset={8}
            className={styles.calendarPopout}
          >
            <Calendar
              mode="single"
              selected={date}
              onSelect={(selectedDate) => {
                setDate(selectedDate);
                if (errors.date) {
                  setErrors(prev => ({ ...prev, date: false }));
                }
              }}
              initialFocus
              disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
              fromDate={new Date()}
            />
          </PopoverContent>
        </Popover>
        {errors.date && <span className={styles.errorText}>Please select a date</span>}
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        className={cn(styles.submitButton, isSubmitting && styles.submitButtonLoading)}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Booking...' : 'Book Now'}
      </button>

    </form>

    {/* Success Popup - Rendered outside form */}
    {showSuccess && (
      <div className={styles.successPopup}>
        <div className={styles.successContent}>
          <h3>Booking Confirmed!</h3>
          <p>Your appointment has been successfully booked. We'll contact you soon.</p>
        </div>
      </div>
    )}
  </div>
  );
}
