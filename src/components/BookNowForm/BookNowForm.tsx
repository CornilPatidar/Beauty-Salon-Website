import styles from "./BookNowForm.module.css";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BookNowForm() {
  const [date, setDate] = useState<Date>();
 

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Book Your Appointment</h2>

      {/* Full Name */}
      <div className={styles.field}>
        <Label htmlFor="name" className={styles.label}>Full Name</Label>
        <Input id="name" placeholder="Enter your full name" className={styles.input} />
      </div>

      {/* Phone Number */}
      <div className={styles.field}>
        <Label htmlFor="phone" className={styles.label}>Phone Number</Label>
        <Input id="phone" placeholder="Enter your phone number" type="tel" className={styles.input} />
      </div>

      {/* Address */}
      <div className={styles.field}>
        <Label htmlFor="address" className={styles.label}>Address</Label>
        <Input id="address" placeholder="House No, Street, Landmark" className={styles.input} />
        <p className={styles.fixedLocation}>Modasa, Gujarat, India</p>
      </div>

      {/* Service */}
<div className={styles.field}>
  <Label className={styles.label}>Select Service</Label>
  <select className={styles.select}>
    <option value="">Select a service</option>
    <option value="haircut">Haircut</option>
    <option value="bridal">Bridal Makeup</option>
    <option value="haircolor">Hair Color</option>
    <option value="spa">Spa Treatment</option>
  </select>

  
</div>

{/* Date Picker */}
<div className={styles.field}>
  <Label className={styles.label}>Date</Label>
  <Popover>
    <PopoverTrigger asChild>
      <Button
        variant={"outline"}
        className={cn(styles.dateButton, !date && "text-muted-foreground")}
      >
        <CalendarIcon className="mr-2 h-4 w-4" />
        {date ? format(date, "PPP") : <span>Pick a date</span>}
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto p-0" align="start">
      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
    </PopoverContent>
  </Popover>
</div>
      {/* Submit */}
      <button className={styles.submitButton}>
        Book Now
      </button>
    </div>
  );
}
